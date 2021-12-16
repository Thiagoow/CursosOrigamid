//----------.forEach(funçãoCallback(item, index, array)):
const carros = ["Ford", "Fiat", "Honda"];

carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
});
// com Arrow Function:
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});
//O terceiro argumento, modifica a array original:
carros.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});

console.log(carros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

/*Se colocarmos o forEach numa var, ela sempre será undefined*/

/*-----------.map(callback(itemAtual, index, array)):
Funciona da mesma forma que o forEach(), porém ao
invés de retornar undefined, retorna uma nova array
com valores atualizados de acordo com o return de cada
iteração. */
const carros1 = ["Ford", "Fiat", "Honda"];
const newCarros = carros1.map((item) => {
  //Retorna:
  return "Carro " + item;
  /*Se não retornarmos nenhum valor durante a iteração utilizando map, 
  o valor retornado como o de qualquer função sem return, será undefined.*/
});

console.log(carros1); // ['Ford', 'Fiat', 'Honda']
console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

/*Se o objetivo for modificar os valores da array atual, 
SEMPRE utilize o map, pois assim uma nova array com os 
valores modificados é retornada e você pode imediatamente
iterar de novo estes valores. Exemplo: */
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((n) => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];

/*----------Iterando objetos com o .map(): */
const aulas = [
  {
    nome: "HTML 1",
    min: 15
  },
  {
    nome: "HTML 2",
    min: 10
  },
  {
    nome: "CSS 1",
    min: 20
  },
  {
    nome: "JS 1",
    min: 25
  }
];

const tempoAulas = aulas.map((aula) => aula.min);
// [15, 10, 20, 25];

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

/*---------------.reduce(callback(acumulador, valorAtual, index, array), valorInicial):
Executa a função de callback para cada item da Array. 
Um valor especial existe nessa função de callback, 
ele é chamado de acumulador, mas é na verdade apenas
o retorno da iteração anterior. */
const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas1.reduce((acc, cur) => acc + cur, 100);
total2; // 165

const nums = [10, 25, 60, 5, 35, 10];
const maiorValor = nums.reduce((acumulador, atual) => {
  /*Se o acumulador (num da iteração anterior),
  for > que o atual, retorna ele, se não, retorna
  o número atual: */
  return acumulador < atual ? atual : acumulador;
});

maiorValor; // 60

/*-----------.reduceRight(acumulador, valorAtual, index, array), valorInicial):
Mesma coisa que o recude, mas esse começa
a iterar da direita para a esquerda, enquanto 
o reduce itera da esquerda para a direita. */
const frutas = ["Banana", "Pera", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

/*----------.some():
Se pelo menos 1 return da iteração
for truthy, ele retorna true. */
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numbers = [0, 43, 22, 88, 101, 2];
const temMaior = numbers.some(maiorQue100); // true

/*-----------.every():
Se todos os returns das iterações forem truthy, o method retorna true. 
Se pelo menos um for falsy, ele retorna false. */

//const frutas = ["Banana", "Pêra", "Uva", ""];
/* False pois pelo menos uma fruta
está vazia '', o que é um valor falsy */
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const maiorQue3 = numbers.every((x) => x > 3); // true

/*-------------.find() & .findIndex():
.find() -> retorna o valor atual da primeira iteração
que retornar um valor truthy.
.findIndex() -> Retorna o index deste valor na array. */
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

const buscaMaior45 = numbers.find((x) => x > 45); // 88

/*--------------.filter():
Retorna uma array com a lista de valores que durante 
a sua iteração retornaram um valor truthy. */
const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas1.filter((fruta) => {
  return fruta;
}); // ☝🏼 ['Banana', 'Uva', 'Maçã']

const numbers1 = [6, 43, 22, 88, 101, 29];
const searchBiggerThan45 = numbers1.filter((x) => x > 45);
// ☝🏼 [88, 101]

//No objeto aulas:
const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
});
// ☝🏼 [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

//---------------------------Exercícios:
console.warn("Exercícios:");

/* Selecione cada curso e retorne uma array
com objetos contendo o título, descricao,
aulas e horas de cada curso */
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
console.log(arrayCursos);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  };
});
console.log(objetoCursos);

/* Retorne uma lista com os
números maiores que 100 */
const nums1 = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = nums1.filter((num) => {
  return num > 100;
});
console.log(maiores100.sort());

/* Verifique se Baixo faz parte
da lista de instrumentos e retorne true */
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const instrumentosUpperCase = instrumentos.map((i) => {
  return i.toUpperCase();
});
console.log(instrumentos);
console.log(instrumentosUpperCase);

const temBaixo = instrumentosUpperCase.some((i) => {
  return i === "BAIXO";
});
console.log("Tem baixo? " + temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99"
  },
  {
    item: "Ovo",
    preco: "R$ 2,99"
  },
  {
    item: "Carne",
    preco: "R$ 25,49"
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35"
  },
  {
    item: "Queijo",
    preco: "R$ 10,60"
  }
];

const comprasUpperCase = compras.map((i) => {
  i = +i.preco.toUpperCase().replace("R$ ", "").trim().replace(",", ".");
  //SEMPRE devemos retornar algo com o map:
  return i;
});
console.log(comprasUpperCase);

let somaCompras = comprasUpperCase.reduce((acumulador, atual) => {
  let total = acumulador + atual;
  return total;
});

//Converte pra real:
somaCompras = somaCompras.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

console.log("A soma de tds as compras é: " + somaCompras);
