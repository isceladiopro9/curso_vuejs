const miPromesa = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            //resolve('Tenemos un valor en la promesa')

            reject('REJECT en mi promesa')
        },1000)
    })
}


const medirTiempoAsync = async() =>{

    try {
        console.log('Inicio');

        const response = await miPromesa()
        console.log(response)

        console.log('Fin');
        return 'fin medirTiempoAsync';
    } catch (error) {
        return 'Catch en medirTiempoAsync'
    }

    

    //throw 'Error en medirTiempoAsync'
}


medirTiempoAsync()
.then(valor => {
    console.log(valor);
})
.catch(error =>{
    console.log(error);
})