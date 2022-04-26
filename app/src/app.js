const express = require('express')

const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Goodnight World!')
})

app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`)
})
