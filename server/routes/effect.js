const router = require("express").Router(); // eslint-disable-line
const Effect = require("../models/Effect");

module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const effect = await Effect.create(req.body);
    res.send(effect);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "an error occered while creating the Effect"
    });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const effectList = await Effect.findAll({
      include: [{ all: true }]
    });
    res.send(effectList);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: "there was an error while retriving the item List"
    });
  }
});
