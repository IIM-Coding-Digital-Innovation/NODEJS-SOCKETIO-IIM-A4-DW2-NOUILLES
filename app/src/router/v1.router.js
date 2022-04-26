const {Router} = require('express');

const {noodlesRouter} = require('../resources/noodles/noodles.router');
const {chatRouter} = require('../resources/chat/chat.router');
const {authRouter} = require('../resources/auth/auth.router');
const {streamingRouter} = require('../resources/streaming/streaming.router');

const router = new Router();

router.use('/noodles', noodlesRouter);
router.use('/chat', chatRouter);
router.use('/auth', authRouter);
router.use('/streaming', streamingRouter);

module.exports = {router};
