
const express = require("express");
const app = express();
const fs = require("fs");

class Container {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  getAll() {
    try {
      const content = fs.readFileSync(this.nombreArchivo);
      const archivoParseado = JSON.parse(content);
      return archivoParseado;
    } catch (error) {
      console.log("No se lee el archivo");
    }
  }

  getRandom() {
    try {
      const content = fs.readFileSync(this.nombreArchivo);
      const archivoParseado = JSON.parse(content);
      const random = Math.floor(Math.random() * archivoParseado.length);
      return archivoParseado[random];
    } catch (error) {
      console.log("No se lee el archivo random  "+error );
    }
  }
}

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send(
    `<div style='background:black;'><h1 style ='color:green; font-size:20px'> Dirigete a la ruta: "/productos" para ver todos los productos o "/productoRandom" para ver un producto random </h1></div>`
  );
});

const container = new Container("Desafio 3/productos.txt");

console.log(container.getAll())

app.get("/productos", (req, res) => {
 
    
  res.send(container.getAll());
})

app.get("/productoRandom", (req, res) => {
  res.send(container.getRandom());
});
