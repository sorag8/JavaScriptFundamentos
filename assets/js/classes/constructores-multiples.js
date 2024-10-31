
class Persona {

    static porObjeto({ nombre, apellido, pais }){
        return new Persona( nombre, apellido, pais );
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}. ${this.apellido}, ${this.pais}`);
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'México;'

const arm = {
    nombre: 'Armando',
    apellido: 'Gonzalez',
    pais: 'México'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( arm );

persona1.getInfo();
persona2.getInfo();