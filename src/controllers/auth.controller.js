const { genSaltSync, hashSync } = require( 'bcrypt' );

const UserModel = require("../models/User");

const register = async ( req, res ) => {
    console.log( 'REGISTRANDO...' )

    // req.body: { username: '', password: '', role: '' }
    const { username, password } = req.body;        // Equivale a: const inputData = req.body;  inputData.username

    // 1. Verificar si existe el usuario --> username (email) 
    // TODO: Poner en el SERVICIO
    const userFound = await UserModel.findOne({ username });         // Equivale a: UserModel.find({ username: username });  
    
    if( userFound ) {
        res.json({
            ok: false,
            msg: 'El usuario ya existe!',
            userFound
        });
    }
    
    // Si no existe. Creamos el usuario
    const dbUser = new UserModel( req.body );

    // Encriptar la contrasenia
    const salt = genSaltSync();                 
    dbUser.password = hashSync( password, salt );

    dbUser.save();

    // (Opcional). Generar JSONWebToken (Si y solo si queremos que al registrarse ingrese al sistema )
    // Responder al cliente 
    res.json({
        msg: 'Login de Usuario',
        pass: dbUser
    });
}

const login = ( req, res ) => {

    res.json({
        msg: 'Login de usuario'
    });
}


module.exports = {
    login,
    register
}