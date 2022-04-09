const persona = {
    'nombre': 'Eladio',
    'apellido': 'Perez',
    'edad': 25,
    'direccion': {
        ciudad: 'Guadalajara',
        cp: 46256,
        lat: 14.2653,
        lon: 14.5654

    },
}

const persona2 = {...persona};

persona2.nombre = 'Saul';

console.log(persona);
console.log(persona2);