const { registerProduct, getAllProducts, getOneProductById, removeOneProductById, updateOneProductById } = require("../services/product.service");


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

const getProductById = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await getOneProductById( product_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al obtener un producto por ID' })
    }
   
}

const removeProductById = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await removeOneProductById( product_id );
        
        res.json({ ok: true, data });
    } 
    catch( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }
    
}

const updateProductById = async ( req, res ) => {
    const product_id = req.params.id;   // Obtener el ID de la ruta
    const inputData = req.body;         // Obtener el body del Request

    try {
        const updatedProduct = await updateOneProductById( product_id, inputData );  // Vincula al Servicio para actualizar producto

        res.json({
            ok: true,
            updatedProduct
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al actualizar producto por ID' })
    }
}


module.exports = {
    createProduct, 
    getProducts, 
    getProductById,
    removeProductById,
    updateProductById
}