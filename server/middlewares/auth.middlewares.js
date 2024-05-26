const { StatusCodes } = require("http-status-codes");
const validator = require("email-validator");
const { ErrorResponse, Utils } = require("../utils");

function validateSingupRequest(req, res, next) {
    const { firstName, lastName, email, password, confirmPassword, gender, grade } = req.body

    
    if(!firstName || !email || !password || !confirmPassword || !gender) {
        ErrorResponse.error = "Provide complete details to create an Account"
    } else if(password !== confirmPassword) {
        ErrorResponse.error = "Passwords Don't Match"
    } else if (false) { //!Utils.passwordRegex.test(password)
        ErrorResponse.error = "Password must be at least 8 characters long and contain a combination of letters, numbers, and special characters."
    } else if (false) {       //!validator.validate(email)
        ErrorResponse.error = "Please Enter a valid email address"
    }
    
    if (Object.keys(ErrorResponse.error).length>0) {
        console.log(ErrorResponse.error)
        ErrorResponse.message = "Signup failed"
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next()
}

module.exports = {
    validateSingupRequest
}