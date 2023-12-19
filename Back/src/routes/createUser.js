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
        if (error.name === "SequelizeValidationError") {
          // Erreur de validation
          const validationErrorMessage = error.errors
            .map((e) => e.message)
            .join(" ");
          const message = `La création de l'utilisateur a échoué à cause d'une erreur de validation : ${validationErrorMessage}`;
          res.status(400).json({ message, data: error });
        } else {
          // Autre type d'erreur
          const message = `L'utilisateur ${req.body.firstName} ${req.body.lastName} n'a pas été crée à cause d'une erreur inattendue.`;
          res.status(500).json({ message, data: error });
        }
      });
  });
};
