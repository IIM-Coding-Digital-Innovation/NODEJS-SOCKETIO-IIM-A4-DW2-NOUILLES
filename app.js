const express = require('express');
//const { sequelizeInstance } = require('./utils/database');
const path = require("path");
const userAPI = require('./src/api/user/routes')
const { sequelize } = require('./models/index')
const bp = require('body-parser')

const app = express();
const port = process.env.SERVER_PORT;

//Formatted body 
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port 3000`)
})

userAPI.createRoutes(app);

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main()

// startServer();
