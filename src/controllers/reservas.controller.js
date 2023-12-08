const { registarReserva, obtenerReservas } = require("../services/reservas.service");

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

const getReserva = async ( req, res ) => {

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
module.exports = {
    createReserva,
    getReserva
}