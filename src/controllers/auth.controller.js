const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const UserModel = require("../models/User");

const { findUserByUsername, registerUser } = require('../services/auth.service');


const register = async ( req, res ) => {
    console.log( 'REGISTRANDO...' )

    // req.body: { username: '', password: '', role: '' }
    const { username } = req.body;        // Equivale a: const inputData = req.body;  inputData.username

    // 1. Verificar si existe el usuario --> username (email) 
    const userFound = await findUserByUsername( username );         // Equivale a: UserModel.find({ username: username });  
    
    if( userFound ) {
        return res.status( 200 ).json({
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

const login = async ( req, res ) => {
    // 1. Obtener los datos requeridos por el login
    const { username, password } = req.body;         // { 'username': '', password: '', role: '' }

    // 2. Verificar si el usuario existe (username ==> email)
    const userFound = await findUserByUsername( username );

    if( ! userFound ) {
        return res.status( 400 ).json({
            ok: false,
            msg: 'El usuario no existe! Por favor registrese.'
        });
    }

    // 3. Confirmar que el password es correcto 
    const isValidPassword = compareSync( password, userFound.password );

    if( ! isValidPassword ) {
        return res.status( 400 ).json({
            ok: false,
            msg: 'Password invalido'
        });
    }

    // 4. Generar una autenticacion pasiva (token)
    const payload = { username: userFound.username };

    const token = sign(
        payload,                            // PayLoad
        'lowngrfiurtkj',                    // PALABRA-CLAVE
        { expiresIn: '1h' }                 // Configuracion
    );

    console.log( token );

    // 5. Responder al Cliente enviandole el Token

    res.status( 200 ).json({
        ok: true,
        token
    });
}


module.exports = {
    login,
    register
}