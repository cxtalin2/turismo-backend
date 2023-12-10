const { Router } = require( 'express' );    
const { createReserva, getReservas, removeReservaById } = require('../controllers/reservas.controller');
const { authUser } = require('../middlewares/validate-user.middleware');

const router = Router();     

router.post( '/', createReserva );
router.get( '/', authUser, getReservas);
router.delete( '/:id',authUser, removeReservaById );

module.exports = router