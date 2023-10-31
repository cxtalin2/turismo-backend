const UserModel = require("../models/User");

const { findUserByUsername, registerUser } = require('../services/auth.service');

const register = async ( req, res ) => {
    console.log( 'REGISTRANDO...' )

    // req.body: { username: '', password: '', role: '' }
    const { username } = req.body;        // Equivale a: const inputData = req.body;  inputData.username

    // 1. Verificar si existe el usuario --> username (email) 
    const userFound = await findUserByUsername( username );         // Equivale a: UserModel.find({ username: username });  
    
    if( userFound ) {
        res.status( 200 ).json({
            ok: false,
            msg: 'El usuario ya existe!'
        });
    }
    
    registerUser( req.body );

    // (Opcional). Generar JSONWebToken (Si y solo si queremos que al registrarse ingrese al sistema )
    // Responder al cliente 
    res.status( 201 ).json({
        ok: true,
        msg: 'Usuario registrado exitosamente'
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