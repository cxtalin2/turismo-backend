const { genSaltSync, hashSync } = require( 'bcrypt' );

const UserModel = require("../models/User");

function registerUser ( newUser ) {
    // Si no existe. Creamos el usuario
    const dbUser = new UserModel( newUser );

    // Encriptar la contrasenia
    const salt = genSaltSync();                 
    dbUser.password = hashSync( newUser.password, salt );

    dbUser.save();
}

async function findUserByUsername( username ) {

    return await UserModel.findOne({ username });         // Equivale a: UserModel.find({ username: username });  
}


module.exports = {
    registerUser,
    findUserByUsername
}