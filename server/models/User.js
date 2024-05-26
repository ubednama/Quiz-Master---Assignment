const mongoose = require('mongoose');
const { ENUMS, Utils } = require('../utils');

const UserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true,
        minLength: [3, 'Name should have atleast 3 characters'],
        maxLength: [50, 'Name cannot have more than 50 character']
    }, lastName: { 
        type: String,
        maxLength: 50
    }, email: { 
        type: String,
        required: true,
        unique: true,
        match: [Utils.emailRegex, 'Please Enter a valid email address']
    }, password: { 
        type: String,
        required: true,
        match: [Utils.passwordRegex, 'Password must be at least 8 characters long and contain a combination of letters, numbers, and special characters.']
    },
    gender: {
        type: String,
        enum: ENUMS.GENDER_ENUM,
        default: "Don't want to specify"
    },
    grade: {
        type: Number,
        enum: ENUMS.GRADE_ENUM,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;