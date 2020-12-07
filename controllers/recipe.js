const { Recipe, Ingredient } = require("../db/models");

// CREATE
exports.create = async (req, res) => {
  try {
    const newItem = await Recipe.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  const { id } = req.params;
  console.log(`Got ${Recipe} id:`, id);
  try {
    const foundItem = await Recipe.findByPk(id);
    if (foundItem) {
      await foundItem.update(req.body);
      res.status(202).json({ message: "Updated!", payload: foundItem });
    } else {
      res.status(404).json({ message: `${Recipe} Not Found` });
    }
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
// LIST
exports.list = async (req, res) => {
  try {
    const allItems = await Recipe.findAll({
      include: {
        as: "ingredients",
        model: Ingredient,
      },
    });
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
