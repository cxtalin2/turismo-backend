const express = require( 'express' );
const app = express();

app.listen( 3000, function() {
    console.log( `Servidor escuchando en http://localhost:3000` );
} );

