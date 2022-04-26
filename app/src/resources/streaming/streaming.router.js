const {Router} = require('express');

const streamingRouter = new Router();

streamingRouter.get('/', (req, res) => {
    res.send('Goodnight Streaming!')
});

module.exports = {streamingRouter};
