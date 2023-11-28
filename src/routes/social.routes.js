const { Router } = require( 'express' );
const { authUser } = require('../middlewares/validate-user.middleware');
const { createSocial, getAllSocials, getSocialById, removeSocialById, updateSocialById } = require('../controllers/social.controller');

const router = Router();

router.post('/', authUser, createSocial );
router.get( '/', authUser, getAllSocials );
router.get( '/:id', authUser, getSocialById );
router.delete( '/:id', authUser, removeSocialById );
router.patch( '/:id', authUser, updateSocialById );

module.exports = router;