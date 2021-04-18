'use stric'

var Insignia = require('../modelos/insignias');

//Crear un objeto que se llame validacion para validar los datos que se ingresan a la collecion Articulos
var validacion = require('validator');

var fs = require('fs'); //trabajar con archivos o gestionar los files
var path = require('path'); //trabajar con la ruta de los archivos



var controladorinsignias = {
buscarInsignias: (req, res) => {
    var consulta = Insignia.find({}).count();

    //Ejecutar la consulta a la BD de Mongo para mostrar los registros en JSON
    consulta.exec((err, numeroInsignia) => {

        if (err) {
            return res.status(500).send({
                //Error
                status: 'error',
                mensaje: 'Error al ejecutar la consulta'
            })
        }

        if (!numeroInsignia) {
            return res.status(404).send({
                //Error
                status: 'error',
                mensaje: 'No existen compras en la base de datos'
            })
        }

        return res.status(200).send({
            //Consulta ejecutada con exito
            status: 'exitosa',
            numeroInsignia
        })
    })

},
}
module.exports = controladorinsignias;