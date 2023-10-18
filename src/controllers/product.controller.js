function create( req, res ) {
    const msg = 'Crea un producto';

    console.log({ msg });
    res.json({ msg });
}

function getById( req, res ) {
    const msg = 'Obtiene un producto por ID';

    console.log({ msg });
    res.json({ msg });
}

function getAll( req, res ) {          // Define funcionalidad
    const msg = 'Obtener todos los productos';

    console.log({ msg });         // Mostrar mensaje en la terminal
    res.json({ msg });          // Mostrar un objeto JSON en el navegador
}

function removeById( req, res ) {
    const msg = 'Elimina un producto';

    console.log({ msg });
    res.json({ msg });
}

function updateById( req, res ) {
    const msg = 'Actualiza un producto';

    console.log({ msg });
    res.json({ msg });
}


module.exports = {
    create,
    getById,
    getAll,
    removeById,
    updateById
}