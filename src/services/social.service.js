const SocialModel = require("../models/Social");

async function registrarSocial( newSocial ) {
   return await SocialModel.create( newSocial )
}

async function obtenerTodosSocial() {
    return await SocialModel.find();
}

async function obtenerSocialPorId( id ) {
    return await SocialModel.findById({_id: id})
}

async function eliminarSocialPorId( id ) {
    return await SocialModel.findByIdAndRemove({ _id: id })
}

async function actualizarSocialPorId( id, updatedSocial ) {
    return await SocialModel.findOneAndUpdate(
        { _id: id }, 
        updatedSocial, 
        { new: true }
    )
}


module.exports = { 
    registrarSocial,
    obtenerTodosSocial, 
    obtenerSocialPorId,
    eliminarSocialPorId,
    actualizarSocialPorId
}