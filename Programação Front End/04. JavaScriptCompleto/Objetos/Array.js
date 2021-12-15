/* Função construtora de Array, todo número possui
as propriedades e métodos do prototype de Array.

Arrays armazenam uma coleção de elementos. 
Estes podem ser strings, arrays, boolean, 
number, functions, objects e mais. */
const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
/* Como não existe um item na posição 10,
o Js preenche os posições que faltam até o 10
com valores vazios: */
carros[10] = "Parati";
//Retornando na array também os espaços vazios:
carros.length; // 11
//Os valores das array's não são estáticos

/*--------------.from()
Transforma array-like objects, em uma array.*/
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros1 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4 //Apenas 3 itens, uma posição fica vazia
};

const carrosArray = Array.from(carros1);
console.log(carros1);
console.log(carrosArray);

/*--------------.from()
Verifica se é uma array e retorna um valor boolean.*/
Array.isArray(li); // false

// Transforma em array:
li = Array.from(li);
Array.isArray(li); // true

/*----------Array.of(), Array() & new Array():
Criam arrays de acordo com os valores passados */
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

/*------------.sort():
Além de retornarem um valor, modifica a 
array original. Organizando pelo unicode. */
const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

/*--------.unshift() & .push():
Unshift -> Adiciona ao início da array 
Push -> Adiciona ao final da array 
Ambos retornam o length da mesma. */
const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Honda", "Kia"); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push("Ferrari"); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

/*----------.shift() & .pop():
Remove o primeiro item da array e retorna;
Remove o último item da array e retorna. */
const carros3 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda']; // <- Removeu o ☝🏼

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW']; // <- Removeu o ☝🏼

/*------------.reverse():
Inverte os itens da array e retorna a modificação. */
carros3.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

/*------------.concat(array1, array2):
Concatena arrays e outros valores, retornando
uma nova array modificada. */
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

/*---------------.slice(inicio, final):
Retorna os itens da array começando pelo 
início e indo até o valor de final. */
const linguagens = ["html", "css", "js", "php", "python"];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();

/*------------.splice(index, remover, item1, item2, ...):
Add valores na array a partir do index e remove a partir 
da posição do item add, a quantidade de itens que for 
definida no 2º parâmetro. Retornando tbm esses itens removidos. */

const carros4 = ["Ford", "Fiat", "VW", "Honda"];
carros4.splice(1, 0, "Kia", "Mustang");
/* ☝🏼 Add os itens a partir da posição 1, 
e não removeu NENHUM item da array, por isso
retorna [] */

carros4; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros4.splice(3, 2, "Ferrari");
/* ☝🏼 Add os item a partir da posição 3, e remove
+ retorna os dois próximos itens, sendo eles:
['Fiat', 'VW'] */

carros4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

/*-----------.fill(valor, inicio, final):
Preenche a array com o valor, do início até o fim. */

//A partir do 2, tudo vira:
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

//A partir do 1 e até o 3, tudo vira:
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

//Se início e fim forem omitidos, toda a array vira o valor passado.
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

/*---------.copyWithin(alvo, inicio, final):
A partir do alvo, ele copia a array começando do inicio até o 
final. Caso omita os valores de início e fim, ele irá utilizar 
como inicio o 0 e como final o length total da array. */
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

/*
 .includes(valor) -> Verifica se a array possui 
 o valor e retorna true ou false. 
 .indexOf(valor) -> Verifica se a array possui o 
 valor e retorna o index do PRIMEIRO valor na array; 
 .lastIndexOf(valor) ->Verifica se a array possui o 
 valor e retorna o index do ÚLTIMO valor na array.
*/
const linguagens1 = ["html", "css", "js", "php", "python", "js"];

linguagens1.includes("css"); // true
linguagens1.includes("ruby"); // false
linguagens1.indexOf("python"); // 4
linguagens1.indexOf("js"); // 2
linguagens1.lastIndexOf("js"); // 5

/*-------------.join(separador):
junta todos os valores da array e retorna uma string com eles. 
Se você passar um parâmetro, ele será utilizado como separador na 
junção de cada item da array. */
const linguagens2 = ["html", "css", "js", "php", "python"];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(" "); // 'html css js php python'
linguagens2.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

//----------------------Exercícios:
console.warn("Exercícios:");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
/* Remova o primeiro valor de comidas e coloque em uma variável
Remova o último valor de comidas e coloque em uma variável
Adicione 'Arroz' ao final da array
Adicione 'Peixe' e 'Batata' ao início da array */
const comidasFirsItem = comidas.shift();
const comidasLastItem = comidas.pop();
console.log(comidasFirsItem, comidasLastItem);

comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
/* Arrume os estudantes em ordem alfabética
Inverta a ordem dos estudantes
Verifique se Joana faz parte dos estudantes
Verifique se Juliana faz parte dos estudantes */

const estudantesSortedArray = estudantes.sort();
estudantesSortedArray.reverse();
console.log(estudantesSortedArray);

estudantesSortedArray.includes("Joana"); // true
estudantesSortedArray.includes("Juliana"); // false

const cars = ["Ford", "Fiat", "VW", "Honda"];
/* Remova o último carro, mas antes de remover
salve a array original em outra variável */
const oldCars = cars.slice();

cars.pop();
console.log(cars);
console.log(oldCars);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
/* Substitua section por ul e div com li,
utilizando split e join */
html = html.split("section");
html = html.join("ul");

html = html.split("div");
html = html.join("li");
console.log(html);
