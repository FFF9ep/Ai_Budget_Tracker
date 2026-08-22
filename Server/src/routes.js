const express = require('express');
const router = express.Router();

const NotFoundError = require('./errors/notFoundError');
const userRoutes = require('./modules/user/user.route');

router.use('/users', userRoutes);

router.use((req, res, next) => {
    next(new NotFoundError("Route not Found!"));
});

module.exports = router;