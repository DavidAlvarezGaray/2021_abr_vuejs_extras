"use stric";

var express = require("express");

// Usar el archivo de controles para establecer rutas

var InsigniasControlador = require("../controles/insignias");

// Crear el objeto para las rutas

var insignias = express.Router();

// Configurar Connect Multiparty

var multiparty = require('connect-multiparty');

// Creación de Rutas
insignias.get("/insignias", InsigniasControlador.buscarInsignias);

module.exports = insignias;