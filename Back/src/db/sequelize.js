const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/user");
const users = require("./mock-users");

const sequelize = new Sequelize("HRnet", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

const User = UserModel(sequelize, DataTypes);

const initDb = () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log("Connexion à la base de données établie avec succès.");
      return sequelize.getQueryInterface().showAllTables();
    })
    .then((tables) => {
      const hasUsersTable = tables.some((table) => table.tableName === "users");
      if (!hasUsersTable) {
        console.log("Initialisation de la base de données...");
        return sequelize.sync({ force: true }).then(() => {
          users.map((user) => {
            User.create({
              firstName: user.firstName,
              lastName: user.lastName,
              dateOfBirth: user.dateOfBirth,
              startDate: user.startDate,
              department: user.department,
              street: user.street,
              city: user.city,
              state: user.state,
              zipCode: user.zipCode,
            }).then((user) => console.log(user.toJSON()));
          });
          console.log("La base de donnée a bien été initialisée !");
        });
      } else {
        console.log(
          "La table 'Users' existe déjà. Aucune initialisation nécessaire."
        );
      }
    })
    .catch((error) =>
      console.error("Impossible de se connecter à la base de données:", error)
    );
};

module.exports = {
  initDb,
  User,
};
