//SERVER 
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();

app.use(express.json());

// Logger para mostrar todos los request que llegan al servidor
app.use(morgan("dev"));

// Middleware de rutas
app.use("/api", routes);

app.listen(5000, () => console.log("listenning on port 5000"));