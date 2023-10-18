const mongoose = require( 'mongoose' );


const dbConection = async () => {

    try {
        await mongoose.connect( 'mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log( 'Base de datos inicializada correctamente' );
    }
    catch( error ) {
        console.error( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }

}


module.exports = {
    dbConection
};