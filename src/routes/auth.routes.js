const { Router } = require( 'express' );
const { login, register } = require('../controllers/auth.controller');

const router = Router();

// http://localhost:4000/api/auth/
router.post( '/login', login );         // http://localhost:4000/api/auth/login
router.post( '/register', register );   // http://localhost:4000/api/auth/register


module.exports = router;