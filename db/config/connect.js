const db = require("../models");
const connect = async (cb) => {
  try {
    // await db.sequelize.sync();
    // await db.sequelize.sync({ alter: true });
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    cb();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

module.exports = connect;
