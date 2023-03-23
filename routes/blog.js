const express = require("express");
const router = express.Router();
var article = require("../article-db");

router.get("/:id/", function (req, res, next) {
  console.log(req.params.id);

  var found = article.find((data) => data.id == req.params.id);
  console.log(found);
  var data = { title: "blog", article: found };
  res.render("detail", data);
});

module.exports = router;
