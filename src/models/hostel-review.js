const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelReviewSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const HostelReview = mongoose.model('HostelReview', hostelReviewSchema);

module.exports = HostelReview;