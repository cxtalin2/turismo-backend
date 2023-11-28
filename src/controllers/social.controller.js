const { registrarSocial, obtenerTodosSocial, obtenerSocialPorId, eliminarSocialPorId, actualizarSocialPorId } = require("../services/social.service");

const createSocial = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    inputData.userId = payload._id

    try {
        const data = await registrarSocial( inputData );
        res.json({ ok: true, data })
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el Plan Social'})
    }
}

const getAllSocials = async ( req, res ) => {
    const inputData = req.body; 

    try {
        const data = await obtenerTodosSocial( inputData );
        res.json({ ok: true, data })
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al traer todos los planes Sociales.'})
    }
}

const getSocialById = async ( req, res ) => {
    const social_id = req.params.id

    try {
        const data = await obtenerSocialPorId( social_id );
        res.json({ ok: true, data });
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al traer Plan Social por ID.' })
    }
}

const removeSocialById = async ( req, res ) => {
    const social_id = req.params.id

    try {
        const data = await eliminarSocialPorId( social_id );
        res.json({ ok: true, data })
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al eliminar plan Social.'})
    }
}

const updateSocialById = async ( req, res ) => {
    const social_id = req.params.id;
    const inputData = req.body

    try {
        const data = await actualizarSocialPorId( social_id, inputData );
        res.json({ ok: true, data });
    } catch (error) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al actualizar plan Social.'})
    }
}


module.exports = {
    createSocial,
    getAllSocials,
    getSocialById,
    removeSocialById,
    updateSocialById
}