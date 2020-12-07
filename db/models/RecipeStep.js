const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const RecipeStepModel = sequelize.define("RecipeStep", {
    description: DataTypes.STRING,
    step: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  });
  return RecipeStepModel;
};
