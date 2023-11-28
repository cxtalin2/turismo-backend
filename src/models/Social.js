const { Schema, model } = require( 'mongoose' );

const SocialSchema = new Schema({
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

const SocialModel = model(
    'Social',
    SocialSchema
);

module.exports = SocialModel