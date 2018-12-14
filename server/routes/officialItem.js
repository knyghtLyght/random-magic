const router = require("express").Router(); // eslint-disable-line
const Item = require("../models/item");

module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "an error occered while creating the item"
    });
  }
});
