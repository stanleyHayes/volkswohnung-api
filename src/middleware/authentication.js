const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = async (req, res, next) => {
    try {
        if(!req.headers.authorization)
            return res.status(400).json({message: 'invalid header format'});
        if(req.headers.authorization.split(" ")[0] !== 'Bearer')
            return res.status(400).json({message: 'invalid header format'});
        const token = req.headers.authorization.split(" ")[1];
        if(!token)
            return res.status(400).json({message: 'token not present'});
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, "devices.token": token});
        if(!user)
            return res.status(401).json({message: 'session expired'});
        req.token = token;
        req.user = user;
        next();
    }catch (e) {
        res.status(400).json({message: `${e.message}`});
    }
}


const authorize = (...roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)){
            next();
        }
        next(new Error(`Not authorized to use this route`));
    }
}

module.exports = {authorize, authenticate};