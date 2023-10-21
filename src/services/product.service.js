const ProductModel = require( '../models/Product' )

async function registerProduct( product ) {
    return await ProductModel.create( product );
}

async function getAllProducts() {
    return await ProductModel.find();
}


module.exports = {
    registerProduct, getAllProducts
}