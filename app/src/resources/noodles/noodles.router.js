const {Router} = require('express');

const noodlesRouter = new Router();

noodlesRouter.get('/', (req, res) => {
    res.send('Goodnight Noodles!')
});

module.exports = {noodlesRouter};
