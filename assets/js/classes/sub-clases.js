

class Persona{
    
    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola desde un método estático');
    }

    nombre = '';
    codigo = '';
    frase =  '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
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


class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = 'Avengers';
    }

    quienSoy(){
        super.quienSoy();
        console.log(`Soy ${this.codigo}, de los ${this.clan}`);
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Tu amigo el hombre araña');
// const ironman = new Persona('Tony Stark', 'Ironman', 'yo soy Ironman');

console.log(spiderman);
spiderman.quienSoy();