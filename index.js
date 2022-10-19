//Declaración de Constantes
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config

//Capturar el body
const app = express()
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Conexion a la base de datos

//Importar Datos

//Ruta del Middleware
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Si jala!'
    })
})

//Inicializar servidor
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Seridor jalando, excelente chamba: '+(PORT))
})