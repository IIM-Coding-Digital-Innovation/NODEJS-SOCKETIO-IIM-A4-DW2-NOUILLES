const {Router} = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.send('Goodnight World!')
})

module.exports = router;
