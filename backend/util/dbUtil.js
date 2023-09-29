import { Sequelize } from "sequelize";
import Config from "../config.js";

const {
    DB_NAME: database,
    DB_USERNAME: username,
    DB_PASSWORD: password,
    DB_HOST: host,
} = Config;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
});

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

export default sequelize;
