const person = {
    name: 'Eladio',
    age: 25,
    codeName: 'Ingeniero'
}

//const {name, age, codeName, power ='Programar'} = person;
/* 
console.log(name)
console.log(age)
console.log(codeName)
console.log(power)
 */



const createHero = ({name, age,codeName, power = 'Programar'}) =>{
    return {
        id: 342353,
        name,
        age,
        codeName,
        power,
    }
}

//const createHero = ({name, age,codeName, power = 'Programar'}) => ({id: 342353,name,age,codeName,power});

console.log('createHero> ', createHero(person) );

