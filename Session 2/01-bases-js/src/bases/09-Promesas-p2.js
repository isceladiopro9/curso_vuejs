import {getHeroById} from './bases/08-Importaciones-Exportaciones'

const getHeroByAsync = (id) =>{
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            let hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else{
                reject('El Heroe no existe')
            }

        },2000)
    })
}


getHeroByAsync(2)
    .then(response => {
        console.log(`El heroe es: ${response.name}`)
    })
    .catch(error =>{
        console.log(error)
    })