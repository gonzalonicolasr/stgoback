var express = require("express");
var router = express.Router();
var request = require("request");

/**
 * @swagger
 * /api/{url}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: utilizado para obtener todas la informacion de la cuenta steam
 *     parameters:
 *       - in: path
 *         name: url
 *         required: true
 *         description: Url sin HTTPS para enviar por el endpoint y retornar el json
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
router.get("/*", function (req, res, next) {
  var url = req.params[0];

  request(
    {
      uri: "http://" + url,
    },
    function (error, response, body) {
      var obj = {};
      obj = body;
      res.status(200).send(body);
    }
  );
});

module.exports = router;
