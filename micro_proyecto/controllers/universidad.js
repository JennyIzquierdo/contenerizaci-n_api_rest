const Universidad = require('../models/universidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try {
         
        const data = req.body
        
        const universidad = new Universidad(data)

        await universidad.save()

        return res.status(201).json(universidad)

    } catch(e) {
        return res.status(500).json({
            msj: e
        })
    }
}

const getUniversidades = async (req = request, 
    res = response) => {
        try {

            const universidades = await Universidad.find()
    
            return res.json(universidades)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const updateUniversidadByID = async (req = request,
    res = response) => {
        try {
            const id = req.params.id

            const { nombre, direccion, telefono  } = req.body

            const data = {
                nombre,
                direccion,
                telefono,
                fechaActualizacion: new Date()
            }
            //data.fechaActualizacion = new Date()

            const universidad = 
                await Universidad.findByIdAndUpdate(id, data, {new: true})
    
            return res.status(201).json(universidad)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }  
}

module.exports = { 
    createUniversidad, 
    getUniversidades,
    updateUniversidadByID
}