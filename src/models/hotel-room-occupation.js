const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelRoomOccupation = new Schema({
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
    status: {
        type: String
    },
    price: {
        amount: {
            type: Number
        },
        currency: {
            type: String
        }
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    duration: {
        amount: {
            type: Number
        },
        unit: {
            type: String
        }
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'HotelRoom',
        required: true
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const HotelRoomOccupation = mongoose.model('HotelRoomOccupation', hotelRoomOccupation);

module.exports = HotelRoomOccupation;