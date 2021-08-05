const User = require('../models/user');

const getUserByEmail = async email => {
    return await User.findOne({email});
}

const getUserByID = async id => {

}

const saveUser = async user => {
    const createdUser = new User({...user});
    createdUser.save();
}
module.exports = {getUserByEmail, getUserByID, saveUser}