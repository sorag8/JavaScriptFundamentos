
const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

console.warn('While');

while( i < carros.length ){
    console.log( carros[i] );
    i++;
}

console.warn('Do While');
//! Do While se ejecuta al menos una vez
let j = 0;

do{
    console.log( carros[j] );
    j++;
} while( carros[j] );
