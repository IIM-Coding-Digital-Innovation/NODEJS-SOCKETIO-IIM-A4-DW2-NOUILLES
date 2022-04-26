const express = require('express')

const {router} = require('./router/v1.router')

const app = express()
const port = process.env.SERVER_PORT

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`)
})
