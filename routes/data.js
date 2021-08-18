var express = require("express");
var router = express.Router();
var request = require("request");
var fetch = require("node-fetch");

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
