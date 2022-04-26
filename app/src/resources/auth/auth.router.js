const {Router} = require('express');

const authRouter = new Router();

authRouter.get('/', (req, res) => {
    res.send('Goodnight Auth!');
});

module.exports = {authRouter};
