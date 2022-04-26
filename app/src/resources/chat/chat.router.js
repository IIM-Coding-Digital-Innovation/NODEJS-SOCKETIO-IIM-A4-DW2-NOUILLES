const {Router} = require('express');

const chatRouter = new Router();

chatRouter.get('/', (req, res) => {
    res.send('Goodnight Chat!')
});

module.exports = {chatRouter};
