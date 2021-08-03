const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`Invalid email ${value}`);
            }
        }
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error(`Invalid phone ${value}`);
            }
        }
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true
    },
    profile: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    stateOrProvinceOrRegion: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required:  true,
        minlength: [6, 'Minimum length is 6'],
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error(`Weak password ${value}`);
            }
        }
    },
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number]
        }
    },
    role: {
        type: String,
        enum: ['SUPER ADMIN', 'ADMIN', 'PROVIDER', 'USER'],
        default: 'USER'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;