var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 6420;

//Rutas
var dataRouter = require("./routes/data");
var app = express();
//Extended swagger docu
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Steam Api ",
      description: "Api para obtener valores de steam",
      contact: {
        name: "Gonzalo Rocca",
        email: "gonn.nicolas@gmail.com",
      },
      servers: ["http://localhost:6420"],
    },
  },
  // ['.routes/*.js']
  apis: ["./routes/data.js"],
};
//creo servidor con la configuracion swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//config cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Endpoints
app.use("/api", dataRouter);

app.listen(port);
console.log("Server iniciado en puerto: " + port + "...");
module.exports = app;
