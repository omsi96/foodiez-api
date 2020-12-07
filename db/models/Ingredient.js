const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const IngredientModel = sequelize.define("Ingredient", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  SequelizeSlugify.slugifyModel(IngredientModel, {
    source: ["name"],
  });
  return IngredientModel;
};
