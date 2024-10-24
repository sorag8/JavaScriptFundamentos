

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

//? Negación - Transforma un valor booleano en su opuesto - '!'
console.warn('Not o la negación');
console.log(!regresaFalse());


//? True si todos los valores son verdaderos - '&&'
console.warn('And');
console.log( true && true ); // true
console.log( true && false ); // false

//? True si al menos una condición es true - '||'
console.warn('Or');
console.log( true || false ); // true
console.log( false || false ); // false

//? Asignaciones
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso  && true;

const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log( a1, a2, a3, a4, a5 );

