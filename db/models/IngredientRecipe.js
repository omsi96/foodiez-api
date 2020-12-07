module.exports = (sequelize, DataTypes) => {
  const IngredientRecipeModel = sequelize.define("IngredientRecipe", {
    quantity: DataTypes.INTEGER,
  });
  return IngredientRecipeModel;
};
