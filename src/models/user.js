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
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email ${value}`);
            }
        }
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
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
        required: true,
        minlength: [6, 'Minimum length is 6'],
        validate(value) {
            if (!validator.isStrongPassword(value)) {
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
    },
    status: {
        type: {
            type: String,
            enum: ['CREATED', 'VERIFIED', 'ONLINE', 'OFFLINE', 'ACTIVE', 'DEACTIVATED', 'SUSPENDED'],
            default: 'CREATED'
        },
        reason: {
            type: String
        },
        date: {
            type: Date
        }
    },
    devices: {
        type: [{
            token: {
                type: String
            },
            date: {
                type: Date
            },
            os: {
                type: String
            },
            browser: {
                type: String
            },
            source: {
                type: String
            },
            ip: {
                type: String
            },
            isDesktop: {
                type: Boolean
            },
            isMobile: {
                type: Boolean
            }
        }]
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const User = mongoose.model('User', userSchema);

module.exports = User;