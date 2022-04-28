// const User = require('../../../models/user');
const db = require('../../../models/index');
const User = db.User;

const create = (app) => {
  app.post('/user', (req, res) => {
    console.log("Reponse : ", req.body)
    
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            status: false,
            message: 'Aucun mot de passe ou mail a été renseigné'
        });
    } else {
        User.create({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            firstname: req.body.firstname,
            lastname: req.body.lastname

        }).then((User) => res.status(201).send(User)).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    }
})
};
const read = (app) => {
  app.get('/user', (req, res) => {
    User.findAll().then((users) => {
      res.json(users);
    });
  });
};
const update = (app) => {
  app.put('/user', (req, res) => {
    res.send('updating user');
  });
};
const del = (app) => {
  app.delete('/user', (req, res) => {
      const idSended = req.body.id;
      const deletedUser =  User.destroy({ where: {id: idSended} });
      res.send(deletedUser);
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
