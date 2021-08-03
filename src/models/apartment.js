const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    rooms: {
        type: [{
            balcony: {
                available: {
                    type: Boolean,
                    default: false
                }
            },
            bathroom: {
                type: Boolean,
                default: true
            },
            gallery: {
                type: [String]
            }
        }]
    },
    kitchen: {
        available: {
            type: Boolean,
            default: true
        },
        count: {
            type: Number,
            default: 1
        }
    },
    hall: {
        available: {
            type: Boolean,
            default: true
        },
        count: {
            type: Number,
            default: 1
        }
    },
    dining: {
        available: {
            type: Boolean,
            default: true
        },
        count: {
            type: Number,
            default: 1
        }
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
    },
    price: {
        currency: {
            type: String
        },
        amount: {
            type: Number
        }
    },
    description: {
        type: String
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;