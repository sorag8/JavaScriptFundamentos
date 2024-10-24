
const elMayor = (a, b) => ( a > b )? `${ a } es mayor` : `${ b } es mayor`;

const tieneMembresia = (membresia) => (membresia) ? '2 dólares' : '5 dólares';

console.log( elMayor(5, 8) );
console.log( tieneMembresia(false) );

const amigo = true;
const amigosArr = [
    'Tony',
    'Petter',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Loki',
    ( () => 'Nick Fury' )(),
    elMayor(10, 7),
];

console.log( amigosArr );


const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });
