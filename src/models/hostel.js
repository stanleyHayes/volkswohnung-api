const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stars: {
        type: Number,
        default: 0
    },
    cover: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    stateOrProvinceOrRegion: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    gallery: {
        type: [String]
    },
    priceRange: {
        type: String
    },
    roomCount: {
        type: Number,
        default: 0
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
    facilities: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                },
                image: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    conducts: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        offense: {
            type: String,
            required: true
        },
        punishment: {
            type: String,
            required: true
        }

    },
    faqs: {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
}, {timestamps: {createdAt: true, updatedAt: true}, toObject: {virtuals: true}, toJSON: {virtuals: true}});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;