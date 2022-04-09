import { heroes } from "../data/heroes";



//getHeroById 
//Find
export const getHeroById = (idHero) => {
            return heroes.find(creador => {
                return creador.id == idHero
            })
        } 

//getHeroByIdOwner
//Filter

export const getHeroesByIdOwner = (owner) => {
    return heroes.filter( heroe => {
        return heroe.owner == owner
    })
}

/* console.log(getHeroById(2))
console.log(getHeroesByIdOwner('DC')) */


// Segunda parte
/* import {getHeroById,getHeroesByIdOwner} from './bases/08-Importaciones-Exportaciones'

console.log(getHeroById(2))
console.log(getHeroesByIdOwner('DC'))
 */