const { StatusCodes } = require("http-status-codes")
const { User } = require("../models")
const { SuccessResponse, ErrorResponse } = require("../utils")

const signup = async(req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })

        if (existingUser) {
            ErrorResponse.error = "User Already Exists"
            ErrorResponse.message = "Signup failed"
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
        }

        const user = await User.create({ ...req.body })
        // const user = awa
        SuccessResponse.message = "User account created Successfully",
            SuccessResponse.data = user
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        // console.error(error);
        if (error.name === 'ValidationError') {
            const validationErrors = [];
            // console.log(error.errors)

            for (let field in error.errors) {
                if (error.errors.hasOwnProperty(field)) {
                    validationErrors.push(error.errors[field].message);
                }
            }

            ErrorResponse.error = validationErrors
        }
        ErrorResponse.message = "Signup failed"
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
}

module.exports = {
    signup
}