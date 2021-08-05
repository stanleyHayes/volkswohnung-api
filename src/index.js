const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const useragent = require('express-useragent');

const authRoutes = require('./routes/authentication');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(value => {
        console.log(`Connected to mongodb on database ${value.connection.db.databaseName}`);
    }).catch(error => {
    console.log(`Error: ${error.message}`);
})

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(useragent.express());

app.use('/api/v1/auth', authRoutes);

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
    console.log(`Connected to server in ${process.env.NODE_ENV} on port ${PORT}`);
});