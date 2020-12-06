module.exports = (sequelize, DataTypes) => {
  return sequelize.define("RecipeStep", {
    description: DataTypes.STRING,
    position: DataTypes.INTEGER,
  });
};
