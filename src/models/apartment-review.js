const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentReviewSchema = new Schema({
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
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
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

const ApartmentReview = mongoose.model('ApartmentReview', apartmentReviewSchema);

module.exports = ApartmentReview;