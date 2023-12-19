const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.get("/api/users", (req, res) => {
    User.findAll()
      .then((users) => {
        const message = `La liste des ${users.length} utilisateurs a bien été récupérée depuis le Back.`;
        res.json({ message, data: users });
      })
      .catch((error) => console.log(error));
  });
};
