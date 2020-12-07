"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// RELATIONSHIPS
// Food Category ----> Ingredient
db.FoodCategory.hasMany(db.Ingredient, {
  as: "ingredients",
  foreignKey: { fieldName: "foodCategoryId", allowNull: false },
});
db.Ingredient.belongsTo(db.FoodCategory, {
  as: "foodCategory",
  foreignKey: { fieldName: "foodCategoryId" },
});

// Ingredient <----> Step

db.Ingredient.belongsToMany(db.Recipe, {
  as: "recipes",
  through: db.IngredientRecipe,
  foreignKey: { fieldName: "ingredientId", allowNull: false },
});
db.Recipe.belongsToMany(db.Ingredient, {
  as: "ingredients",
  through: db.IngredientRecipe,
  foreignKey: { fieldName: "ingredientId", allowNull: false },
});
module.exports = db;
