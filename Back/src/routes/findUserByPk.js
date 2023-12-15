const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.get("/api/users/:id", (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        if (user) {
          const message = "Un utilisateur a bien été trouvé.";
          res.json({ message, data: user });
        } else {
          const message = "Aucun utilisateur trouvé !";
          res.json({ message, data: user });
        }
      })
      .catch((error) => console.log(error));
  });
};
