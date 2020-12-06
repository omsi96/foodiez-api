const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const FoodCategory = sequelize.define("FoodCategory", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  SequelizeSlugify.slugifyModel(FoodCategory, {
    source: ["name"],
  });
  return FoodCategory;
};
