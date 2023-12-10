const { Router } = require( 'express' );    
const { createReserva, getReservas } = require('../controllers/reservas.controller');
const { authUser } = require('../middlewares/validate-user.middleware');

const router = Router();     

router.post( '/', createReserva );
router.get('/', authUser, getReservas);

module.exports = router