const { User } = require("../db/sequelize");
const { ValidationError, UniqueConstraintError } = require("sequelize");

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
}

function isDateValid(dateString) {
  if (!dateString) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

module.exports = (app) => {
  app.post("/api/users", async (req, res) => {
    try {
      if (
        !isDateValid(req.body.dateOfBirth) ||
        !isDateValid(req.body.startDate)
      ) {
        const message = "Une ou plusieurs dates fournies sont invalides.";
        return res.status(400).json({ message });
      }

      const formattedDateOfBirth = formatDate(req.body.dateOfBirth);
      const formattedStartDate = formatDate(req.body.startDate);

      const newUserKey = `${req.body.firstName}${req.body.lastName}${formattedDateOfBirth}${formattedStartDate}${req.body.department}${req.body.street}${req.body.city}${req.body.state}${req.body.zipCode}`;

      const existingUsers = await User.findAll();

      const isDuplicate = existingUsers.some((user) => {
        const userData = user.get({ plain: true });
        const existingUserKey = `${userData.firstName}${
          userData.lastName
        }${formatDate(userData.dateOfBirth)}${formatDate(userData.startDate)}${
          userData.department
        }${userData.street}${userData.city}${userData.state}${
          userData.zipCode
        }`;
        return newUserKey === existingUserKey;
      });

      if (isDuplicate) {
        const message = `L'utilisateur ${req.body.firstName} ${req.body.lastName} existe déjà.`;
        return res.status(409).json({ message });
      }

      const user = await User.create(req.body);
      const message = `L'utilisateur ${req.body.firstName} ${req.body.lastName} a bien été créé.`;
      res.json({ message, data: user });
    } catch (error) {
      if (error instanceof ValidationError) {
        return res
          .status(400)
          .json({ message: error.message, errors: error.errors });
      } else if (error instanceof UniqueConstraintError) {
        return res.status(409).json({ message: "L'utilisateur existe déjà." });
      } else {
        console.error(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
      }
    }
  });
};
