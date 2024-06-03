const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { mongoConn } = require('./databases/configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

mongoConn()

const tipoProyectos = require('./routes/tipoProyecto')
const clientes = require('./routes/cliente')
const universidades = require('./routes/universidad')
const etapas = require('./routes/etapa')
const proyectos = require('./routes/proyecto')

// middlewares
app.use('/api/tiposproyectos', tipoProyectos)
app.use('/api/clientes', clientes)
app.use('/api/universidades', universidades)
app.use('/api/etapas', etapas)
app.use('/api/proyectos', proyectos)

module.exports = app