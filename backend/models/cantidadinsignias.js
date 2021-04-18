"use stric";

var mongoose = require("mongoose"); // Cargar el modulo de Mongoose
var Schema = mongoose.Schema; // Usar objetos Schema para la BD

// Crear objeto Schema

var InsigniaEsquema = Schema({
  _id: String,
  cantidad: Number,
});

module.exports = mongoose.model("Insignia", InsigniaEsquema);
