const { FoodCategory } = require("../db/models");
const { Ingredient } = require("../db/models/");

// CREATE
exports.create = async (req, res) => {
  try {
    const newItem = await FoodCategory.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  const { id } = req.params;
  console.log(`Got ${FoodCategory} id:`, id);
  try {
    const foundItem = await FoodCategory.findByPk(id);
    if (foundItem) {
      await foundItem.update(req.body);
      res.status(202).json({ message: "Updated!", payload: foundItem });
    } else {
      res.status(404).json({ message: `${FoodCategory} Not Found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.destory = async (req, res) => {
  const { id } = req.params;
  try {
    const foundItem = await FoodCategory.findByPk(id);
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
    const allItems = await FoodCategory.findAll({
      include: {
        model: Ingredient,
        as: "ingredients",
      },
    });
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
