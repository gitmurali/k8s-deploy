const express = require('express');

const userActions = require('../controllers/user-actions');

const router = express.Router();

router.post('/signup', userActions.createUser);

router.post('/login', userActions.verifyUser);

module.exports = router;