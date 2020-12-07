const { Recipe, Ingredient } = require("../db/models");

// CREATE
exports.add = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    recipe.res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.destory = async (req, res) => {
  const { id } = req.params;
  try {
    const foundItem = await Recipe.findByPk(id);
    if (foundItem) {
      await foundItem.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Error while deleting" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
