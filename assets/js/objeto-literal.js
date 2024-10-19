
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
}

console.log( personaje );
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje['nombre'] );
console.log( 'Edad: ', personaje.edad );

console.log( 'Coors: ', personaje.coords );
console.log( 'Coors Lat: ', personaje.coords.lat );

console.log( 'Numero Trajes: ', personaje.trajes.length);
console.log( 'Último Traje: ', personaje.trajes[personaje.trajes.length - 1] );

const x = 'vivo';
console.log( personaje[x] );

console.log( 'Última película: ', personaje['ultima-pelicula']);


//! Mas detalles

//todo Eliminar propiedades
delete personaje.edad;
console.log( personaje );


//todo Transformar el objeto en arreglos
const entriPares = Object.entries( personaje );
console.log( entriPares );

//todo Crear una nueva propiedad en el objeto que se va a crear en el momento de ejecucion
personaje.casado = true;
console.log( personaje );

//todo Bloqueo de las propiedades, pero no bloquea las propiedades anidadas o secundarias, solo las primarias
Object.freeze( personaje );
personaje.dinero = 10000000000;
personaje.vivo = true;
personaje.direccion.ubicacion = 'CDMX, México';
console.log( personaje );

//todo Listar todas las propiedades del objeto como arreglo
const propiedades = Object.getOwnPropertyNames( personaje );
console.log({ propiedades });

//todo Listar todos los valores del objeto como arreglo
const valores = Object.values( personaje );
console.log({ valores });

