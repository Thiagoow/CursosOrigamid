//1-----------------------Introdução:
console.warn("Exemplo1 - Introdução:");

//Constructor function carro (inicia sempre com letra maiúscula):
function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  /* Oq é definido com this. é exportado,
  (pode ser usado pra fora da function)
  as outras coisas permanecem apenas no escopo: */
  this.marca = marca;
  this.preco = precoFinal;
  //console.log(this)
}

//Criando uma NOVA(new) var objeto com a constructor:
const celta = new Carro("Chevrolet", 4000);
/* Com os atributos:
celta.marca = "Chevrolet";
celta.preco = 4000;
*/
console.log(celta);

//2-----------------------Exemplo real:
console.warn("Exemplo2 - Exemplo real:");

function Dom(select, activeClass) {
  (this.element = () => {
    return document.querySelector(select);
  }),
    (this.addClass = () => {
      this.element().classList.add(activeClass);
      return console.log("Classe add :)");
    });
}

const ulTag = new Dom("ul", "ativo");
ulTag.addClass();

//3-----------------------Exercícios:
console.warn("Exemplo3 - Exercícios:");

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  }
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const users = [];
const user1 = new Pessoa("João", 20);
const user2 = new Pessoa("Maria", 25);
const user3 = new Pessoa("Bruno", 15);
users.push(user1, user2, user3);

console.log(users);

users[0].andar();
users[1].andar();
users[2].andar();

/* Crie uma Constructor Function (Dom1) para manipulação
de listas de elementos do dom. Deve conter as seguintes
propriedades e métodos:
  
elements, retorna NodeList com os elementos selecionados
addClass(classe), adiciona a classe a todos os elementos
removeClass(classe), remove a classe a todos os elementos */
function Dom1(elementos) {
  const elementsList = document.querySelectorAll(elementos);
  //Prop exportada:
  this.elements = elementsList;

  this.addClass = (classe) => {
    console.group(`Classe ${classe} add aos elementos:`);

    elementsList.forEach((element) => {
      element.classList.add(classe);
      console.log(element.innerText);
    });
    console.groupEnd();
  };
}
const listaItens = new Dom1("li");
listaItens.addClass("ativoPelaDom1");

/*Possuindo essa listaITens, as props
exportadas com this na função construtora:
.elements & .addClass("classe") */
console.log(listaItens);
