const login = ( req, res ) => {

    res.json({
        msg: 'Login de Usuario'
    });
}

const register = ( req, res ) => {

    res.json({
        msg: 'Registro de usuario'
    });
}


module.exports = {
    login,
    register
}