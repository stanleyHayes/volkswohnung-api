const express = require('express');
const {
    register,
    login,
    getProfile,
    reactivateProfile,
    deactivateProfile,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    resendOTP,
    verifyOTP
} = require('../controllers/authentication');

const {authenticate} = require('../middleware/authentication');

const router = express.Router({mergeParams: true});

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);
router.put('/update-password', authenticate, updatePassword);
router.put('/profile', authenticate, updateProfile);
router.get('/profile', authenticate, getProfile);
router.put('/verifyOTP',  verifyOTP);
router.post('/resendOTP', resendOTP);
router.put('/profile/deactivate', authenticate, deactivateProfile);
router.put('/profile/reactivate', authenticate, reactivateProfile);


module.exports = router;