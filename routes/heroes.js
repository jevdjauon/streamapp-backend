const router = require("express").Router();
let Hero = require("../models/heroes.model");

router.route("/").get((req, res) => {
  Hero.find()
    .then((heroes) => res.json(heroes))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const heroname = req.body.heroname;
  const classType = req.body.classType;
  const race = req.body.race;

  const newHero = new Hero({
    username,
    heroname,
    classType,
    race,
  });

  newHero
    .save()
    .then(() => res.json("Hero added !!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Hero.findById(req.params.id)
    .then((hero) => res.json(hero))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Hero.findByIdAndDelete(req.params.id)
    .then(() => res.json("Hero deleted !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Hero.findById(req.params.id)
    .then((hero) => {
      hero.username = req.body.username;
      hero.heroname = req.body.heroname;
      hero.classType = req.body.classType;
      hero.race = req.body.race;

      hero
        .save()
        .then(() => res.json("Hero updated !!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
