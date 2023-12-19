const { User } = require("../db/sequelize");

function formatDate(dateString) {
  if (!dateString) return ""; // Retourne une chaîne vide si la date est invalide ou manquante
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ""; // Vérifie si la date est valide
  return date.toISOString().split("T")[0]; // Formatte la date au format YYYY-MM-DD
}

module.exports = (app) => {
  app.post("/api/users", async (req, res) => {
    try {
      // Formattez les dates avant de les concaténer
      const formattedDateOfBirth = formatDate(req.body.dateOfBirth);
      const formattedStartDate = formatDate(req.body.startDate);

      // Créez une clé unique en incluant les dates formatées
      const newUserKey = `${req.body.firstName}${req.body.lastName}${formattedDateOfBirth}${formattedStartDate}${req.body.department}${req.body.street}${req.body.city}${req.body.state}${req.body.zipCode}`;

      // Récupérer tous les utilisateurs et vérifier les doublons
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
      console.log(error);
      // Gérer les autres erreurs ici
    }
  });
};
