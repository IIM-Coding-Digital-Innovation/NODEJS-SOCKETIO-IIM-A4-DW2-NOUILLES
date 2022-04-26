const express = require('express');
const { sequelizeInstance } = require('./utils/database');

const { router } = require('./router/v1.router');

const app = express();
const port = process.env.SERVER_PORT;

app.use('/v1', router);

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

startServer();
