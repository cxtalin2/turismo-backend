require( 'dotenv' ).config();

const express = require( 'express' );
const { dbConection } = require('./config/mongo.config');
const app = express();

const PORT = process.env.PORT || 3000;

/** Establece Rutas de la aplicacion */
app.use(
    '/api/products',                        // Middleware que configura la ruta
    require( './routes/products.routes' )   // Importa el archivo de rutas para esta ruta '/api/products'
);    

dbConection();

app.listen( PORT, function() {
    console.log( `Servidor escuchando en http://localhost:${ PORT }` );
} );

