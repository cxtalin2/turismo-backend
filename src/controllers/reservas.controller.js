const { registarReserva, obtenerReservas, eliminarReservaPorId } = require("../services/reservas.service");

const createReserva = async ( req, res ) => {
    const inputData = req.body; 

    try {
        const data = await registarReserva( inputData );    
        
        res.status( 201 ).json({ 
            ok: true,
            data 
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear reserva'
        })
    }
}

const getReservas = async ( req, res ) => {

    try {
        const data = await obtenerReservas();

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todas las reservas.'
        })
    }
}

const removeReservaById = async ( req, res ) => {
    const reserva_id = req.params.id;

    try {
        const data = await eliminarReservaPorId( reserva_id );
        
        res.status( 204 ).json({ ok: true, data });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un plan por ID'
        })
    }
    
}

module.exports = {
    createReserva,
    getReservas,
    removeReservaById
}