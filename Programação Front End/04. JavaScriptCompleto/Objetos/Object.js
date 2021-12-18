/* Todo objeto é criado com o construtor Object, 
por isso herda as propriedades e métodos do seu prototype. */

/*-----------.create(obj, defineProperties):
Retorna um novo objeto que terá como
protótipo o objeto do primeiro argumento. */

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  }
};

//Cria um novo objeto a partir do de cima
const honda = Object.create(carro);
//Herdando então, suas propriedades e funções
honda.init("Honda").acelerar();

/*--------------.assign(alvo, obj1, obj2):
Add ao alvo as propriedades e métodos enumeráveis
dos demais objetos. O assign irá modificar o objeto alvo. */
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  }
};

const moto = {
  rodas: 2,
  capacete: true
};

const ônibus = {
  rodas: 4,
  mala: true
};

//Dás aos objetos alvos X e Y as props do objeto Z:
Object.assign(moto, funcaoAutomovel);
Object.assign(ônibus, funcaoAutomovel);

/*-----------.defineProperties(alvo,  props):
Add ao objeto alvo novas propriedades. */
const moto1 = {};

//Existe também o Object.defineProperty, para uma propriedade única.
Object.defineProperties(moto1, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false // impede mudança de valor
  }
});

moto1.rodas = 4;
delete moto1.capacete;
moto1; // {rodas: 2}

/*
get() -> Quando acionamos uma propriedade do objeto
set() -> Quando definimos um valor para uma prop do objeto
*/
const moto2 = {};
Object.defineProperties(moto2, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    }
  }
});

moto2.velocidade = 200;
moto2.velocidade; // Velocidade 200

/*------------------.getOwnPropertyDescriptors():
Lista todos os métodos e propriedades de um objeto, 
com as suas devidas configs. */
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade
