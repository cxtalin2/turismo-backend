const { registrarVoluntariado, obtenerTodosVoluntariados, obtenerVoluntariadoPorId, eliminarVoluntariadoPorId, actualizarVoluntariadoPorId } = require("../services/voluntariado.service");

const createVoluntariado = async ( req, res ) => {

    const inputData = req.body;
    const payload = req.authUser;

    inputData.userId = payload._id

    try {
        const data = await registrarVoluntariado( inputData );
        res.json({ ok: true, data })
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el Voluntariado' })
    }

}

const getAllVoluntariados = async ( req, res ) => {

    const inputData = req.body;

    try {
        const data = await obtenerTodosVoluntariados( inputData );
        res.json({ ok: true, data })
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al traer los Voluntariados' })
    }

}

const getVoluntariadoById = async ( req, res ) => {
    const voluntariado_id = req.params.id;

    try {
        const data = await obtenerVoluntariadoPorId( voluntariado_id );
        res.json({ ok: true, data });
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener Voluntariado por ID'})
    }

}

const removeVoluntariadoPorId = async ( req, res ) => {
    const voluntariado_id = req.params.id;

    try {
        const data = await eliminarVoluntariadoPorId( voluntariado_id )
        res.json({ ok: true, data });
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al eliminar el Voluntariado'})
    }
}

const updateVoluntariadoById = async ( req, res ) => {
    const voluntariado_id = req.params.id;
    const inputData = req.body; 

    try {
        const data = await actualizarVoluntariadoPorId( voluntariado_id, inputData );

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al actualizar voluntariado' })
    }
}



module.exports = {
    createVoluntariado,
    getAllVoluntariados,
    getVoluntariadoById,
    removeVoluntariadoPorId, 
    updateVoluntariadoById
}