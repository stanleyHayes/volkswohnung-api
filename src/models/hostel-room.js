const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelRoomSchema = new Schema({
    number: {
        type: String,
        required: true,
        trim: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Hostel'
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
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const HostelRoom = mongoose.model('HostelRoom', hostelRoomSchema);

module.exports = HostelRoom;