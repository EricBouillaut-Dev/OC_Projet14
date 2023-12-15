const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.delete("/api/users/:id", (req, res) => {
    User.findByPk(req.params.id).then((user) => {
      const userDeleted = user;
      User.destroy({
        where: { id: user.id },
      })
        .then((_) => {
          const message = `L'utilisateur avec l'identifiant n°${userDeleted.id} a bien été supprimé.`;
          res.json({ message, data: userDeleted });
        })
        .catch((error) => console.log(error));
    });
  });
};
