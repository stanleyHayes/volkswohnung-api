const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelRoomSchema = new Schema({
    number: {
        type: String,
        required: true,
        trim: true
    },
    hotel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Hotel'
    },
    bedCount: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        amount: {
            type: Number
        },
        currency: {
            type: String
        }
    },
    gallery: {
        type: [String]
    },
    image: {
        type: String
    },
    addons: {
        type: [String]
    },
    status: {
        type: String,
        enum: ['AVAILABLE', 'OCCUPIED'],
        default: 'AVAILABLE'
    },
    information: {
        type: String
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;