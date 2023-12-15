const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const Sequelize = require("./src/db/sequelize");

const app = express();
const port = 3001;

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

Sequelize.initDb();

require("./src/routes/findAllUsers")(app);
require("./src/routes/createUser")(app);
require("./src/routes/updateUser")(app);
require("./src/routes/deleteUser")(app);
require("./src/routes/findUserByPk")(app);

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  )
);
