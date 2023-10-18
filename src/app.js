const express = require( 'express' );
const { dbConection } = require('./config/mongo.config');
const app = express();

dbConection();

app.listen( 3000, function() {
    console.log( `Servidor escuchando en http://localhost:3000` );
} );

