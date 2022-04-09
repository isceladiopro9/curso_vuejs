const numeros = [1,2,3,4,5];
numeros.push(5);

const numeros2 = [...numeros];
numeros2.push(6);

const multiplicativos = numeros2.map(num =>{
    return num*2;
})
multiplicativos.push(14);


console.log(numeros);
console.log(numeros2);
console.log(multiplicativos);