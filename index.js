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
console.log(process)
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.CONTRA}@cluster0.bgdoogq.mongodb.net/${process.env.DBNAME}`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conectao a db')
}).catch(e => {
    console.log('error: ', e)
})

//Importar Rutas
const authRoutes = require('./routes/auth.js')

//Ruta del Middleware
app.use('/api/user', authRoutes)

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