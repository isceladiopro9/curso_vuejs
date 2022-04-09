 const saludar = (nombre) => {
    return `Hola ${nombre}`
 }

 const nombre = 'Eladio';

 console.log(saludar(nombre));

 const heroes = [
     {
         id:1,
         nombre: 'Batman'
     },
     {
         id:2,
         nombre: 'Superman'
     }
 ];

const existe_heroe = (heroe) => {
    return heroe.id == 1;
}

console.log(heroes.some(existe_heroe));