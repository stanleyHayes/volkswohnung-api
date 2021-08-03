const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelReviewSchema = new Schema({
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
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
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

const HotelReview = mongoose.model('HotelReview', hotelReviewSchema);

module.exports = HotelReview;