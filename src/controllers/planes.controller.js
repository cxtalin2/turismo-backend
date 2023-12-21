const { registrarPlan, obtenerPlanes, obtenerPlanPorId, eliminarPlanPorId, actualizarPlanPorId, obtenerPlanesPaginados } = require("../services/planes.service");



const createPlan = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    inputData.userId = payload._id

 
    if( inputData?.category?.length == 0 ) {
        delete inputData.category;
    }

    try {
        const data = await registrarPlan( inputData );    
        
        res.status( 201 ).json({ 
            ok: true,
            data 
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear plan'
        })
    }
    
}

const obtenerTodos = async ( req, res ) => {

    console.log( req.authUser );

    try {
        const data = await obtenerPlanes();

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los planes'
        })
    }
    
}

const obtenerPaginados = async ( req, res ) => {
    
    console.log( req.authUser );
    const page = parseInt(req.params.page) || 1;
    const pageSize = 3;
    try {
        const data = await obtenerPlanesPaginados( page, pageSize);

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los planes'
        })
    }
    
}

const obtenerUno = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await obtenerPlanPorId( product_id );

        res.status( 200 ).json({ ok: true, data });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al obtener un plan por ID' })
    }
   
}

const removePlanById = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await eliminarPlanPorId( product_id );
        
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

const updatePlanById = async ( req, res ) => {
    const product_id = req.params.id;   // Obtener el ID de la ruta
    const inputData = req.body;         // Obtener el body del Request

    try {
        const updatedProduct = await actualizarPlanPorId( product_id, inputData );  // Vincula al Servicio para actualizar producto

        res.status( 206 ).json({
            ok: true,
            updatedProduct
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al actualizar plan por ID' })
    }
}


module.exports = {
    createPlan, 
    obtenerTodos,
    obtenerPaginados, 
    obtenerUno,
    removePlanById,
    updatePlanById
}