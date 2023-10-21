const ProductModel = require( '../models/Product' )

async function registerProduct( product ) {
    return await ProductModel.create( product );
}

async function getAllProducts() {
    return await ProductModel.find();
}

async function getOneProductById( id ) {
    return await ProductModel.findById( id );
}


module.exports = {
    registerProduct, getAllProducts, getOneProductById
}