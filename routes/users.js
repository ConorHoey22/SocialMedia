const express = require('express');
const router = express.Router();

// ----- Models -----
const User = require('../models/Users');

// @route   GET api/users
// @desc    Test GET Route
// @access  Public

router.get('/', (req, res) => res.send('User Routes'));

module.exports = router;
