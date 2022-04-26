const express = require('express');
const { sequelizeInstance } = require('./utils/db');

const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Goodnight World!')
})

const startServer = async () => {
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection with database has been established successfully !');
        app.listen(port, () => {
            console.log(`Server listening on http://127.0.0.1:${port}`);
        });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

startServer();
