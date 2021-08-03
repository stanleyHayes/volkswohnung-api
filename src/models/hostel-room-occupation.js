const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelRoomOccupation = new Schema({
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
        ref: 'HostelRoom',
        required: true
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const HostelRoomOccupation = mongoose.model('HostelRoomOccupation', hostelRoomOccupation);

module.exports = HostelRoomOccupation;