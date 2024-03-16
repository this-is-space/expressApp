const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

router.post("/", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  });

  try {
    const savedItem = await item.save();
    res.send(savedItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(400).send(err);
  }
});

// PUT: Update an item
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
