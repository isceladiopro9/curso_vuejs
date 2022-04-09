//console.log('Hola Mundo, con Eladio!!')

const nombre = 'Eladio';
const apellido = 'Perez';

const nombreCompleto = `${nombre} ${apellido}`; 

console.log(nombreCompleto);

function getSaludo(p_nombre){
    return 'Hola '+p_nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);