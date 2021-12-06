//1-------------- Selecionando elementos no DOM:
console.warn("Exemplo1:");

/* 
Seletores mais usados e estáticos
(não atualizados) --> NodeList (mais methods):
    .querySelector() ou .querySelectorAll()

Outros menos usados (mais específicos) e dinâmicos
(atualizam em tempo real) --> HTML Collection:
    .getElementById() / .getElementsByClassName() / .getElementsByTagName()
*/

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescri = document.querySelector(".animais-descricao");
const h2Animais = animaisDescri.querySelector("h2");

console.log(animaisDescri);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);

//2-------------- forEach e Arrow Function:
console.warn("Exemplo2:");
const imgs = document.querySelectorAll("img");

let i = 0;
//Arrow function (sem 'function', e sim a fat arrow '=>'):
imgs.forEach((i, index, array) => {
  /*Mostra cada uma das imgs no console: */
  console.log(i);

  /*Mostra o index de cada uma das imgs no console: 
  console.log(index);*/

  /*Mostra a array a qual estamos fazendo o forEach:
  console.log(array); */
});

/* Transformando uma var em uma array, para poder manipula-la
com todos os métodos de array: */
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

//Arrow function em linha única (sem {}):
titulosArray.forEach((item) => console.log(item));

//3-------------- Classes e Atributos:
console.warn("Exemplo3:");

const menu = document.querySelector(".menu");

/* Classes: 
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); // adiciona classe
menu.classList.add('ativo', 'mobile'); // add duas classes
menu.classList.remove('ativo'); // remove classe
menu.classList.toggle('ativo'); // adiciona ou remove a classe (se ela não existe, ou já existe)
menu.classList.contains('ativo'); // Existe essa classe no menu? true ou false
menu.classList.replace('ativo', 'inativo'); 
*/

const animais = document.querySelector(".animais");

const img = document.querySelector("img");
/* Atributos:
animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

img.getAttribute('src'); // pega valor do src
img.setAttribute('alt', 'Texto Alternativo'); // seta outro text alt
img.hasAttribute('id'); // Existe esse atributo na img? true ou false
img.removeAttribute('alt'); // remove o atributo alt
img.hasAttributes(); // true / false se tem qualquer atributo
*/

/* ReadOnly vs Writable:
ReadOnly são propriedades ou atributos que não permitem a mudança de seus valores;

Agora caso a propriedade seja Writable, para modificar fazemos:
objeto.propriedade = ''
*/

// Adiciona a classe ativo a todos os itens do menu:
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantém apenas no primeiro:
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

// Verifica se as imagens possuem o atributo alt:
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifica o href do link externo no menu:
const link = document.querySelector('a[href^="http"]'); //Seleciona a tag A que começa com "http"
link.setAttribute("href", "https://www.origamid.com/");
console.log(link);

//4-------------- Dimensões e Distâncias:
console.warn("Exemplo4:");
