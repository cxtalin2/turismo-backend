const { Schema, model } = require( 'mongoose' );

const PlanSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String        
    },
    price: {
        type: Number, 
        default: 0
    },
    category: {
        type: String,
        required: true,
        default: 'Local'
    },
    urlImage: String,   
    userId: {           
        type: String,
        required: true
    },
    highlight: {
        type: Boolean,
        default: false
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

