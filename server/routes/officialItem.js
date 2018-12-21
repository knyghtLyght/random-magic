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

router.get("/", async (req, res, next) => {
  try {
    const itemList = await Item.findAll({
      include: [{ all: true }]
    });
    res.send(itemList);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "there was an error while retriving the item List"
    });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const itemList = await Item.findByPk(req.params.id, {
      include: [{ all: true }]
    });
    res.send(itemList);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "there was an error while retriving the item List"
    });
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const query = req.query;
    const itemList = await Item.findAll({});
    res.send(itemList);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "there was an error while retriving the item List"
    });
  }
});

router.get("/test", (req, res, next) => {
  Item.findAll({
    include: [{ all: true }]
  })
    .then(res.send.bind(res))
    .catch(next);
});
