const obj1 = {
    Nombre: 'Maria',
    Apellido: 'Hernandez',
    Direccion: {
        Estado: 'Carabobo',
        Ciudad: 'Montalban'
    }
}

const stringFiedCompleObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringFiedCompleObj)
const obj3 = JSON.parse(stringFiedCompleObj)
