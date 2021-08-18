var express = require("express");
var router = express.Router();
var request = require("request");
var fetch = require("node-fetch");
/**
 * @swagger
 * /api/?url={url}:
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
router.get("/", async function (req, res, next) {
  let response = await getDataSteam(req.query.url);
  res.status(200).send(response);
});
async function getDataSteam(url) {
  console.log(url);
  const weather = await fetch(url);
  let response = await weather.json();
  return response;
}
module.exports = router;
