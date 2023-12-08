const ReservasModel = require('../models/Reservas')

async function registarReserva( reservas ) {
    return await ReservasModel.create( reservas );
}

async function obtenerReservas() {
    return await ReservasModel.find();
}

module.exports = {
    registarReserva, 
    obtenerReservas
}