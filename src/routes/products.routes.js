const { Router } = require( 'express' );    // Importa el Router de Express
const router = Router();                    // Invoca el Router de Express

const { createProduct } = require('../controllers/product.controller');


/** Definicion de rutas para products 
 * http://localhost:4001/api/products
*/
router.post( '/', createProduct );


module.exports = router;                    // Expone el router para que sea usado por otros archivos