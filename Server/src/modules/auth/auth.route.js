const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const asyncErrorHandler = require('../../errors/asyncErrorHandler');
const { registerValidator, loginValidator } = require('./auth.validator');
const validateRequest = require('../../middlewares/validation.middleware')

router.post('/register',
    registerValidator,
    validateRequest,
    asyncErrorHandler(authController.register.bind(authController))
)

router.post('/login',
    loginValidator,
    validateRequest,
    asyncErrorHandler(authController.login.bind(authController))
)

router.get('/profile',
    asyncErrorHandler(authController.register.bind(authController))
)

module.exports = router;