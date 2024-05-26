const express = require('express');
const authRoutes = require('./auth.route')

const router = express.Router();

router.use('/v1', authRoutes )

module.exports = router;