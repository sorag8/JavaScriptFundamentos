
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido }) ;

const persona = crearPersona( 'Armando','González' );
console.log( persona );


//? Imprime argumentos en una funcioón de flecha con el resto, ...rest
const imprimeArgumentos = ( ...args ) => {
    console.log( args );
    return args;
}

imprimeArgumentos( 'Armando', 36, true, true, true );

//? Desestructuración de un arreglo
const [ nombre1,edad,esCasado,tieneHijos,tieneMascota ] = imprimeArgumentos( 'Armando', 36, true, true, true );
console.log({ nombre1,edad,esCasado,tieneHijos,tieneMascota });

//? Desestructuración de objetos
const { apellido: nuevoApellido } = crearPersona( 'Elías','Ochoa' );
console.log( nuevoApellido );

//? Destructuración de argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark III','Mark V']
}

const imprimePropiedades = ({nombre,codeName,vivo,edad = 14,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );