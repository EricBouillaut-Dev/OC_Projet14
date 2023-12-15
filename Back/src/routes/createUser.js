const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.post("/api/users", (req, res) => {
    User.create(req.body)
      .then((user) => {
        const message = `L'utilisateur ${req.body.firstName} ${req.body.lastName} a bien été crée.`;
        res.json({ message, data: user });
      })
      .catch((error) => {
        console.log(error);
        const message = `L'utilisateur ${req.body.firstName} ${req.body.lastName} n'a pas été crée.`;
        res.json({ message, data: error });
      });
  });
};
