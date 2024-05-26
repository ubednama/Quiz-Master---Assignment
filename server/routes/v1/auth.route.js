const express = require('express');
const { AuthControllers } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');
const router = express.Router();

router.get('/login', (req, res)=> {
    res.json("This is user login route")
})


router.get('/logout', (req, res) => {
    res.json("This is user logout route")
})


router.post('/signup', AuthMiddlewares.validateSingupRequest, AuthControllers.signup)


module.exports = router