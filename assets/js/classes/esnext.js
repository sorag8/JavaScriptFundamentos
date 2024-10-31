

class Rectangulo {

    #area = 0;

    constructor(base, altura){
        this.base = base;
        this.altura = altura

        this.#area = base * altura;
    }

}

const rectangulo = new Rectangulo(5,10);

// rectangulo.#area = 1;

console.log(rectangulo);