
// Esto se debe imprimir con la palabra new
function Persona (nombre, edad) {
    
    this.nombre = nombre;
    this.edad = edad;

    this.imprimeDatos = function() {
        console.log(`Nombre: ${nombre} - edad: ${edad}`);
    }

}

const maria = new Persona('María', 24);
const melissa = new Persona('Melissa', 35);

console.log(maria);
maria.imprimeDatos();

console.log(melissa);
melissa.imprimeDatos();

