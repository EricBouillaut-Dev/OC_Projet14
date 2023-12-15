const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id: id },
    }).then((_) => {
      User.findByPk(id)
        .then((user) => {
          const message = `L'utilisateur ${user.firstName} ${user.lastName} a bien été modifié.`;
          res.json({ message, data: user });
        })
        .catch((error) => console.log(error));
    });
  });
};
