const ProductModel = require( '../models/Product' )

async function registerProduct( product ) {
    return await ProductModel.create( product );
}


module.exports = {
    registerProduct
}