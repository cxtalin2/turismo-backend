const { Schema, model } = require( 'mongoose' );

const VoluntariadoSchema = new Schema({
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
    urlImage: String
}, {
    timestamps: true
});


const VoluntariadoModel = model(
    'Voluntariado',
    VoluntariadoSchema
);

module.exports = VoluntariadoModel;