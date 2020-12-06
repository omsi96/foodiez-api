// const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Recipe", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  });
};
