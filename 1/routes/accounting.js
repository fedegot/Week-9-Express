const router = require("express").Router();

router.get("/", (req, res) => res.status(200).json("Accounting"));

router.get("/:name", (req, res) => {
  console.log(req.params);
  res.status(200).json({ name: req.params.name });
});

module.exports = router;
