const { Router } = require( 'express' );    // Importa el Router de Express
const router = Router();                    // Invoca el Router de Express

/** Establece Rutas para productos
 *  
 */
router.get( 
    '/',                            // http://localhost:4000/api/products/
    function( req, res ) {          // Define funcionalidad
        const msg = 'Obtener todos los productos';

        console.log({ msg });         // Mostrar mensaje en la terminal
        res.json({ msg });          // Mostrar un objeto JSON en el navegador
    });

// Obtenemos un producto por ID
router.get( 
    '/:id',                         // http://localhost:4000/api/products/<product=id> (Parametrizar la ruta 'id')
    function( req, res ) {
        const msg = 'Obtiene un producto por ID';

        console.log({ msg });
        res.json({ msg });
    } );

// Crea un producto
router.post( '/', function( req, res ) {
    const msg = 'Crea un producto';

    console.log({ msg });
    res.json({ msg });
});

// Elimina un producto
router.delete( '/:id', function( req, res ) {
    const msg = 'Elimina un producto';

    console.log({ msg });
    res.json({ msg });
} );

// Actualiza un producto
router.patch( '/:id', function( req, res ) {
    const msg = 'Actualiza un producto';

    console.log({ msg });
    res.json({ msg });
} );


module.exports = router;                    // Expone el router para que sea usado por otros archivos