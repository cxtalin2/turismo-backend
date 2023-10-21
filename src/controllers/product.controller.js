const { registerProduct, getAllProducts } = require("../services/product.service");


const createProduct = async ( req, res ) => {
    const inputData = req.body;

    console.log( inputData );

    try {
        const data = await registerProduct( inputData );    
        
        res.json({ 
            ok: true,
            data 
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear producto'
        })
    }
    
}

const getProducts = async ( req, res ) => {

    try {
        const data = await getAllProducts();

        res.json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener todos los productos'
        })
    }
    
}


module.exports = {
    createProduct, getProducts
}