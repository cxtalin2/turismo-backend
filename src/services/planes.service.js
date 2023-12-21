const PlanModel = require('../models/Plan')

async function registrarPlan( plan ) {
    return await PlanModel.create( plan );
}

async function obtenerPlanesPaginados( page, pageSize ) {
    return await PlanModel.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .sort({ createdAt: -1 });
}

async function obtenerPlanes( page, pageSize ) {
    return await PlanModel.find()
}

async function obtenerPlanPorId( id ) {
    return await PlanModel.findById( id );
    //return await PlanModel.find({ _id: id });
}

async function eliminarPlanPorId( id ) {
    return await PlanModel.findOneAndRemove({ _id: id });
}

async function actualizarPlanPorId( id, updatePlanById ) {
    return await PlanModel.findOneAndUpdate(
        { _id: id },        // Objeto para realizar la consulta y encontrar el documento a actualizar
        updatePlanById,     // Datos que vamos a actualizar
        { new: true }       // Configura la respuesta de la consulta (Mostrar el cambio actual) 
    );
}


module.exports = {
    registrarPlan, 
    obtenerPlanes, 
    obtenerPlanPorId,
    eliminarPlanPorId, 
    actualizarPlanPorId,
    obtenerPlanesPaginados
}