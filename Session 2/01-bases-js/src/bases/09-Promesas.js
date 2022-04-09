console.log('Inicio')

new Promise ((resolve, reject) => {
    console.log('Cuerpo de la promesa');
    //resolve('Promesa resulta')
    reject('Promesa resuelta con error')
})
.then(msg =>{
    console.log(msg)
})
.catch( error =>{
    console.log(error)
})

console.log('Fin')