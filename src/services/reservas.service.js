const ReservasModel = require('../models/Reservas')

async function registarReserva( reservas ) {
    return await ReservasModel.create( reservas );
}

async function obtenerReservas() {
    return await ReservasModel.find();
}

async function eliminarReservaPorId( id ) {
    return await ReservasModel.findOneAndRemove({ _id: id });
}



module.exports = {
    registarReserva, 
    obtenerReservas,
    eliminarReservaPorId
}