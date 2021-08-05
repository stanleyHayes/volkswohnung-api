const bcrypt = require('bcryptjs');

const User = require('../models/user');

const register = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            username,
            occupation,
            country,
            stateOrProvinceOrRegion,
            city,
            password,
            role,
            coordinates
        } = req.body;

        const user = await User.findOne({email});
        if (user)
            return res.status(409).json({data: null, message: `${email} already in use`});
        const createdUser = await User.create({
            name,
            email,
            phone,
            username,
            occupation,
            country,
            stateOrProvinceOrRegion,
            city,
            password: await bcrypt.hash(password, 10),
            role,
            location: {coordinates: [coordinates.longitude, coordinates.latitude]}
        });
        res.status(201).json({message: `Account created. Check your inbox on ${email} to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const login = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const verifyOTP = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const resendOTP = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const resetPassword = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const forgotPassword = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const updatePassword = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const updateProfile = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const getProfile = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const deactivateProfile = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

const reactivateProfile = async (req, res) => {
    try {
        res.status(200).json({message: `Account created. Check your email to verify your account`, data: {}});
    } catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}

module.exports = {
    register,
    login,
    verifyOTP,
    resendOTP,
    resetPassword,
    forgotPassword,
    updatePassword,
    updateProfile,
    getProfile,
    deactivateProfile,
    reactivateProfile
};