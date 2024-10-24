
let a = 11;
console.log({a});
if( a > 10 ){
    console.log('"a" es mayor a 10');
}else{
    console.log('"a" es menor a 10');
}

(a === 10) ? console.log('"a" es igual a 10') : console.log('"a" no es igual a 10');

console.log('Fin comparativa de "a"');

console.log('');

//? Ejemplo de imprime día
let hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if( dia === 0 ){
    console.log('Domingo');
} else if( dia == 1){
    console.log('Lunes');
} else {
    console.log('No es lunes ni domingo');
}

dia = 4;

const semana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado'
];

console.log(semana[dia] || 'Día no definido');

const semana2 = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

 console.log(semana2[dia] || 'Día no definido');