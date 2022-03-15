const express = require("express");
const router = express.Router();

let productos = [
  {
    id: 1,
    titulo: "libro matematicas",
    precio: 2110,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 2,
    titulo: "libro algebra",
    precio: 2320,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 3,
    titulo: "libro historia",
    precio: 2020,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  }
];

router.get("/", (req, res) => {
  res.json(productos);
});

router.get("/:id", (req, res) => {
  try {
    const idParam = req.params.id;
    const productoId = productos.find((productos) => productos.id == idParam);
    return res.json(productoId);
  } catch {
    res.status(404).json({ error: "Producto no encontrado " + error });
  }
});

router.post("/", (req, res) => {
  productos.push(req.body);
  res.json({
    mensaje: "se agrego correctamente el producto con id: " + req.body.id,
  });
});

router.put("/:id", (req, res) => {
  const idParam = req.params.id;

  try {
    let busquedaId = productos.find((productos) => productos.id == idParam);
    if (parseInt(busquedaId.id) === parseInt(idParam)) {
      productos.splice(busquedaId.id - 1, 1, req.body);
      res.json({ productos });
    } else {
      res.json("Error de Ingreso");
    }
  } catch (err) {
    throw "Erorr Server";
  }
});

router.delete("/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  try {
    productos = productos.filter((productos) => productos.id !== idParam);

    return res.json(productos);
  } catch (err) {
    throw "Erorr Server";
  }
});

module.exports = router;
