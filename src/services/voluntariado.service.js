const VoluntariadoModel = require("../models/Voluntariado");

async function registrarVoluntariado( newVoluntariado )  {
   return await VoluntariadoModel.create( newVoluntariado);
}

async function obtenerTodosVoluntariados()  {
    return await VoluntariadoModel.find();
}

async function obtenerVoluntariadoPorId( id ) {
    return await VoluntariadoModel.findById({ _id: id })
}

async function eliminarVoluntariadoPorId( id ) {
    return await VoluntariadoModel.findOneAndRemove({ _id: id })
}

async function actualizarVoluntariadoPorId( id, updatedVoluntariado ){
   return await VoluntariadoModel.findOneAndUpdate(
    { _id: id },
    updatedVoluntariado,
    { new: true }
    )
}

module.exports = {
    registrarVoluntariado,
    obtenerTodosVoluntariados,
    obtenerVoluntariadoPorId,
    eliminarVoluntariadoPorId,
    actualizarVoluntariadoPorId
}