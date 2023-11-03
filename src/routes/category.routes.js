const { Router } = require( 'express' );
const { getCategories, getCategoryById, createCategory, removeCategory, updateCategory } = require('../controllers/category.controller');

const router = Router();

// http://localhost:4000/api/categories
router.get( '/', getCategories);
router.get( '/:id', getCategoryById );
router.post( '/', createCategory );
router.delete( '/:id', removeCategory );
router.patch( '/:id', updateCategory );


module.exports = router;
