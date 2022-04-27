const express = require('express');
//const { sequelizeInstance } = require('./utils/database');
const path = require("path");

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});

const startServer = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection with database has been established successfully.');
    app.listen(port, () => {
      console.log(`Server listening on http://127.0.0.1:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// startServer();
