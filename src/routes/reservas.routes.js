const { Router } = require( 'express' );    
const { createReserva } = require('../controllers/reservas.controller');
const router = Router();     

router.post( '/', createReserva );

module.exports = router