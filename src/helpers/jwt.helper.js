const { sign } = require("jsonwebtoken");


const generateToken = ( payload ) => {
    return sign(
        payload,                            // PayLoad
        process.env.SECRET_JWT_SEED,        // PALABRA-CLAVE
        { expiresIn: '1h' }                 // Configuracion
    );
}


module.exports = {
    generateToken
}