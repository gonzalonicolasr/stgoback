var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/:tagId", function (req, res, next) {
  var url = req.params.tagId;

  request(
    {
      uri: "https://" + url,
    },
    function (error, response, body) {
      var obj = {};
      obj = body;
      res.status(200).send(body);
    }
  );
});

module.exports = router;
