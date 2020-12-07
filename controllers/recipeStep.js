const { RecipeStep } = require("../db/models");

// CREATE
exports.create = async (req, res) => {
  try {
    const newItem = await RecipeStep.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  const { id } = req.params;
  console.log(`Got ${RecipeStep} id:`, id);
  try {
    const foundItem = await RecipeStep.findByPk(id);
    if (foundItem) {
      await foundItem.update(req.body);
      res.status(202).json({ message: "Updated!", payload: foundItem });
    } else {
      res.status(404).json({ message: `${RecipeStep} Not Found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.destory = async (req, res) => {
  const { id } = req.params;
  try {
    const foundItem = await RecipeStep.findByPk(id);
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
    const allItems = await RecipeStep.findAll();
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
