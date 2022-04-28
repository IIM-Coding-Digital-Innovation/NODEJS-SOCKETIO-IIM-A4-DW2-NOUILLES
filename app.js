const express = require('express');
var http = require('http');
const socket = require('socket.io')
//const { sequelizeInstance } = require('./utils/database');
const path = require("path");
const userAPI = require('./src/api/user/routes');
const { sequelize } = require('./models/index');
const bodyParser = require('body-parser');
const app = express();
const server = new http.Server(app);
const io = socket(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

const messages = [];
io.on('connection', (socket) => {
  console.log(`Connecté au client ${socket.id}`);
  socket.emit('messages', messages);
  socket.on('message', (message) => {
    if (messages.length > 10) {
      messages.shift();
    }
    messages.push(message);
    io.emit('messages', messages);
  });
});

server.listen(3000, () => {
  console.log('Votre app est disponible sur localhost:3000 !');
});

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
