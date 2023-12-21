const { Router } = require( 'express' );    // Importa el Router de Express
const router = Router();                    // Invoca el Router de Express

const { authUser } = require('../middlewares/validate-user.middleware');
const { createPlan, obtenerTodos, obtenerUno, updatePlanById, removePlanById, obtenerPaginados } = require('../controllers/planes.controller');



/** Definicion de rutas para products 
 * http://localhost:4001/api/products
*/
router.post( '/', authUser, createPlan );              // Crea un producto
router.get( '/', obtenerTodos );                           // Obtener todos los productos
router.get( '/:page', obtenerPaginados )
router.get( '/:id', obtenerUno );                     // Obtener un producto por ID
router.delete( '/:id', authUser, removePlanById );     // Elimina producto por ID
router.patch( '/:id', authUser, updatePlanById );      // Actualiza parcialmente

module.exports = router;                    // Expone el router para que sea usado por otros archivos