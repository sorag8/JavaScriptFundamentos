//? Centraliza la logica para que se pueda utilizar varias veces
//* Metodo: Función que se encuentra dentro de un objeto
//* Argumentos: Variables pasadas a una función al momento de llamar o invocar la función

// Función
function saludar(){
    console.log( 'Hola' );
}

// Función anónima
const saludar2 = function(){
    console.log( 'Hola de nuevo' );
}

// Función de flecha
const saludar3 = () => {
    console.log( 'Hola otra vez' );
}

saludar();
saludar2();
saludar3();

console.log('');


// Función con argumentos

function saludarArg1( nombre ){
    console.log('Hola ' + nombre);
}

const saludarArg2 = function ( nombre ){
    console.log( 'Hola', nombre );
    console.log( arguments );
}

const saludarArg3 = ( nombre ) => {
    console.log( 'Hola '+nombre+', como estas?' );
}

saludarArg1( 'Armando' );
saludarArg2( 'Armando',40,true,'Xalapa' );
saludarArg3( 'Armando' );


//todo Retorno de las funciones
console.log('');
console.log('Retorno de las funciones');

function sumar( a, b ){
    return (a + b);
}

const sumarFlecha = (a, b) => {
    return (a + b);
} 

console.log( sumar(1,2) );
console.log( sumarFlecha(2,3) );

//todo Función aleatorio
console.log('');

function getAleatorio(){
    return Math.random()
}
console.log( getAleatorio() );

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );