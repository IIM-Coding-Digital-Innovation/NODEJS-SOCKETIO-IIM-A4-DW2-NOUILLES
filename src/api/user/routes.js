const create = (app) => {
  app.post('/user', (req, res) => {
    res.send('creating user');
  });
};
const read = (app) => {
  app.get('/user', (req, res) => {
    res.send('reading user');
  });
};
const update = (app) => {
  app.put('/user', (req, res) => {
    res.send('updating user');
  });
};
const del = (app) => {
  app.delete('/user', (req, res) => {
    res.send('deleting user');
  });
};

module.exports = {
  createRoutes: (app) => {
    create(app);
    read(app);
    update(app);
    del(app);
  },
};
