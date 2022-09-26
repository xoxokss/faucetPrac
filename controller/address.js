const express = require("express");
const router = express.Router();

router.post("/address", (req, res) => {
  const test = req.body.address;
  console.log("input test : ", test);

  res.json({ message: "test", data : test });
});
module.exports = router;
