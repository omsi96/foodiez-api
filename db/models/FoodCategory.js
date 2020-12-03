module.exports = (sequelize, DataTypes) => {
  return sequelize.define("FoodCategory", {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
