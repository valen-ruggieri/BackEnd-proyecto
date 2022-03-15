const express = require("express");
const Router = require("./productosRouter");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/productos", Router);

const server = app.listen(PORT, () => {
  console.log("servidor levantado en puerto " + server.address().port);
});

server.on("error", (error) => console.log("Hubo un error " + error));
