

class Persona { 

    static _conteo = 0;
    
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); // UNdefined
        
        console.log('Hola desde un método estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu vecino el hombre araña');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(spiderman);
// spiderman.quienSoy();
// spiderman.miFrase();
spiderman.setComidaFavorita = 'Pie de cereza de la tía May';
console.log(spiderman);
// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);

console.log(Persona.conteo);

Persona.mensaje();
