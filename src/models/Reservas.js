const { Schema, model } = require( 'mongoose' );

const ReservasSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    }, 
    plan: {
        type: String
    }, 
    date: {
        type: Date
    },
    quantity: {
        type: String
    },
    notes: {
        type: String
    },
    total: {
        type: Number, 
        default: 0
    }
})

const ReservasModel = model(
    'Reservas',
    ReservasSchema
);

module.exports = ReservasModel;