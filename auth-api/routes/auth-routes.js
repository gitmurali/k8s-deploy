const express = require('express');

const authActions = require('../controllers/auth-actions');

const router = express.Router();

router.get('/hashed-pw/:password', authActions.getHashedPassword);

router.post('/token', authActions.getToken);

router.post('/verify-token', authActions.getTokenConfirmation);

module.exports = router;
