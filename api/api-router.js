const express = require('express');
const router = express.Router();
const userRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router');
const classRouter = require('../class/class-router');


router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/classes', classRouter);


module.exports = router;