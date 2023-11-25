const { Schema, model } = require( 'mongoose' );

const PlanSchema = new Schema({
    // Define las propiedades de la Entidad
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String,
        default: 0
    },
    category: {
        type: String,
        required: true,
        default: 'non-category'
    },
    urlImage: String,   
    userId: {           
        type: String,
        required: true
    }
}, {
    // Define las configuraciones que deseamos para aplicar a este objeto en Mongoose 
    timestamps: true    // Crea 2 campos, (Fecha Creacion, Fecha de Actualizacion)
});

// Crea el modelo a partir del Schema
const PlanModel = model( 
    'Plan',          // Nombre de la Entidad (Collection) 
    PlanSchema       // Estructura de la Entidad
);


module.exports = PlanModel;

