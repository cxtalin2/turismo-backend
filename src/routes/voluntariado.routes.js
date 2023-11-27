const { Router } = require( 'express' );
const { createVoluntariado, getAllVoluntariados, getVoluntariadoById, removeVoluntariadoPorId, updateVoluntariadoById } = require('../controllers/voluntariado.controller');


const router = Router();



router.post('/', createVoluntariado );
router.get( '/', getAllVoluntariados);
router.get( '/:id', getVoluntariadoById );
router.delete( '/:id', removeVoluntariadoPorId);
router.patch( '/:id', updateVoluntariadoById );







module.exports = router;