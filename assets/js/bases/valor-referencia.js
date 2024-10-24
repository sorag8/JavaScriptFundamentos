
//* En JavaScript todos los objetos son pasados por referencia
//? Todos los datos primitivos se pasan por valor y todos los objetos son pasados por referencia

const cambiarNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony  = cambiarNombre( peter );
let bruce = cambiarNombre( tony );
console.log( peter );
console.log( tony  );
console.log( peter );


// Arreglos
const frutas = ['Manzana','Pera','Piña'];

const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

const masFrutas = frutas.slice();
masFrutas.push('Uva');
console.table({ frutas, masFrutas });
