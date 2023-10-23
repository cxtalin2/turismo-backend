const { Router } = require( 'express' );    // Importa el Router de Express
const router = Router();                    // Invoca el Router de Express

const { createProduct, getProducts, getProductById, removeProductById, updateProductById } = require('../controllers/product.controller');


/** Definicion de rutas para products 
 * http://localhost:4001/api/products
*/
router.post( '/', createProduct );              // Crea un producto
router.get( '/', getProducts );                 // Obtener todos los productos
router.get( '/:id', getProductById );           // Obtener un producto por ID
router.delete( '/:id', removeProductById );     // Elimina producto por ID
router.patch( '/:id', updateProductById );      // Actualiza parcialmente

module.exports = router;                    // Expone el router para que sea usado por otros archivos