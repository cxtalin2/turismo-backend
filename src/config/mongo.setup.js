const UserModel = require( '../models/User' );


const createDefaultUsers = async () => {

    try {
        const count = await UserModel.estimatedDocumentCount();

        if( count > 0 ) return;

        // Crea usuarios por defecto
        const users = await Promise.all([
            new UserModel({
                name: "Catalina Guamán",
                username: "catalina16gv@gmail.com",
                password: ")947W*euG8^E",
                role: 'superadmin'
            }).save(),
            new UserModel({
                name: "Diego Parra",
                username: "diegoparra@correo.com",
                password: ")947W*euG8^E",
                role: 'admin'
            }).save(),
            new UserModel({
                name: "Maicol",
                username: "maicol@turismo.co",
                password: ")947W*euG8^E",
                role: 'registered'
            }).save()
        ]);

        console.log( users );

    } 
    catch ( error ) {
        console.error( error );
    }

}

module.exports = {
    createDefaultUsers
}