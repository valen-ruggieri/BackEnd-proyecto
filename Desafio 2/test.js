const Container = require("./container");

const container = new Container("Desafio 2/productos.txt");

container.save({
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
});

container.save({
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
});

container.save({
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
});

container.getById(0);
container.getById(1);
container.getById(2);

container.getAll();
// container0.deleteAll()
// container0.deleteById(1)
// container1.getById(1)
// container0.deleteById(2)
