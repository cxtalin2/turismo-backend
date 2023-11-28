const { Router } = require( 'express' );
const { createVoluntariado, getAllVoluntariados, getVoluntariadoById, removeVoluntariadoPorId, updateVoluntariadoById } = require('../controllers/voluntariado.controller');
const { authUser } = require('../middlewares/validate-user.middleware');


const router = Router();



router.post('/', authUser, createVoluntariado );
router.get( '/', authUser, getAllVoluntariados);
router.get( '/:id', authUser, getVoluntariadoById );
router.delete( '/:id', authUser, removeVoluntariadoPorId);
router.patch( '/:id', authUser, updateVoluntariadoById );







module.exports = router;