const { Router } = require( 'express' );    // Importa el Router de Express

const { getAll, getById, create, updateById, removeById } = require('../controllers/product.controller');

const router = Router();                    // Invoca el Router de Express

/** Establece Rutas para productos
 *  
 */
router.get( 
    '/',                            // http://localhost:4000/api/products/
    getAll                          // Invoca a la funcionalidad del controlador
);

// Obtenemos un producto por ID
router.get( 
    '/:id',                         // http://localhost:4000/api/products/<product=id> (Parametrizar la ruta 'id')
    getById
);

// Crea un producto
router.post( '/', create );

// Elimina un producto
router.delete( '/:id', removeById );

// Actualiza un producto
router.patch( '/:id', updateById );


module.exports = router;                    // Expone el router para que sea usado por otros archivos