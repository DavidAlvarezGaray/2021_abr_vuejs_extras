"use stric";

var mongoose = require("mongoose"); // Cargar el modulo de Mongoose
var Schema = mongoose.Schema; // Usar objetos Schema para la BD

// Crear objeto Schema

var CompraEsquema = Schema({
  id_articulo: String,
  cantidad: Number,
  monto: Number,
});

module.exports = mongoose.model("compra", CompraEsquema);
