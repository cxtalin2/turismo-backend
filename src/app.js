require( 'dotenv' ).config();

const express = require( 'express' );
const { dbConection } = require('./config/mongo.config');
const app = express();

const PORT = process.env.PORT || 3000;

dbConection();

app.listen( PORT, function() {
    console.log( `Servidor escuchando en http://localhost:${ PORT }` );
} );

