const fs = require("fs");

class Container {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async save(obj) {
    try {
      const archivoName = this.nombreArchivo;
      const content = fs.readFileSync(archivoName);
      const content_parsed = JSON.parse(content);
      obj["id"] = content_parsed[content_parsed.length - 1].id +1;
      fs.writeFileSync(archivoName, JSON.stringify([...content_parsed, obj]));
    } catch (err) {
      const archivoName = this.nombreArchivo;
      fs.writeFileSync(archivoName, JSON.stringify([{ ...obj, id: 0 }]));
    }
  }

  async getById(id) {
    try {
      const content = fs.readFileSync(this.nombreArchivo);
      const archivoParseado = JSON.parse(content);
      return console.log(
        archivoParseado.find((producto) => id === producto.id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const content = fs.readFileSync(this.nombreArchivo);
      const archivoParseado = JSON.parse(content);
      return console.log(archivoParseado);
    } catch (error) {
      console.log("No se lee el archivo");
    }
  }

  async deleteById(id) {
    try {
      const content = fs.readFileSync(this.nombreArchivo);
      const archivoParseado = JSON.parse(content);
      const indice = archivoParseado.indexOf(id);
      archivoParseado.splice(indice, indice);
      return console.log(archivoParseado);
    } catch (error) {
      console.log("No se encuentra");
    }
  }

  async deleteAll() {
    fs.writeFileSync(this.nombreArchivo, " ");
  }
}

module.exports = Container;
