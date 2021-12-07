//1-------------- Selecionando elementos no DOM:
console.error("Exemplo1 - querySelector:");

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

//2----------------------forEach e Arrow Function:
console.error("Exemplo2 - forEach:");
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

//3------------------------Classes e Atributos:
console.error("Exemplo3 - classList & attributes:");

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

//Seleciona todas as tags A que começam com "http"
const externalLinks = document.querySelectorAll('a[href^="http"]');
// Modifica o href dos links externos:
externalLinks.forEach((one) => {
  one.setAttribute("href", "https://www.origamid.com/");
});
console.log(externalLinks);

//Previne o comportamento padrão deles:
externalLinks.forEach((one) => {
  one.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

//4-------------------Dimensões e Distâncias:
console.error("Exemplo4 - width & height:");

const section = document.querySelector(".animais-lista");
console.log(section);

console.log("clientHeight -> " + section.clientHeight + "px"); // height + padding
console.log("offsetHeight -> " + section.offsetHeight + "px"); // height + padding + border
console.log("scrollHeight -> " + section.scrollHeight + "px"); // height total, mesmo dentro de um scroll

//Sendo a mesma coisa para o width:
console.log("");
console.log("clientWidth -> " + section.clientWidth + "px"); // Width + padding
console.log("offsetWidth -> " + section.offsetWidth + "px"); // Width + padding + border
console.log("scrollWidth -> " + section.scrollWidth + "px"); // Width total, mesmo dentro de um scroll
console.log("");

// Distância entre o topo do elemento e o topo da página:
console.log("offsetTop -> " + section.offsetTop + "px");
// Distância entre o canto esquerdo do elemento e o canto esquerdo da página:
console.log("offsetLeft -> " + section.offsetLeft + "px");
console.log("");

/* 
getBoundingClientRect() -> Método que retorna um objeto 
com valores de width, height, distâncias do elemento e mais.
*/

const rect = section.getBoundingClientRect();
console.log("RectHeight -> " + rect.height); // height do elemento
console.log("RectWidth -> " + rect.width); // width do elemento
console.log("RecTop -> " + rect.top); // distância entre o topo do elemento e o scroll

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço
window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

/* matchMedia() -> Utilize uma media-query como no CSS 
para verificar a largura do browser */
const small = window.matchMedia("(max-width: 800px)");

if (small.matches) {
  console.log("Tela < que 800px");
} else {
  console.log("Tela > que 800px");
}

//----------------Exercícios 1:
console.error("Exercícios 1:");

/* Verifica a distância da 1º imagem
em relação ao topo da página: */
const imgTop = img.offsetTop;
console.log("First img " + imgTop);

// Retorna a soma da largura de todas as imagens:
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log("Soma width de todas as imagens: " + soma);
}

window.onload = () => {
  somaImagens();
};

/* Verifica se os links da página possuem
o mínimo recomendado para telas utilizadas
com o dedo. (48px/48px de acordo com o google): */
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

/* Se o browser for menor que 720px,
adicione a classe menu-mobile ao menu: */
const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}

//5-------------------------- Eventos:
console.error("Exemplo5 - Eventos:");

/*A boa prática é sempre separar a função
que será executada no evento, do próprio evento,
assim: */
function callbackFunction(event) {
  console.log("Clicou na:");
  console.log(img);
  //Argumento "event" ou "e" mais explicado abaixo:
  console.log(event);
}
//Executa a função de callback acima quando clicar na img:
img.addEventListener("click", callbackFunction);

/* Mas também, pode ser encontrado assim:

img.addEventListener("click", () => {
  console.log("Clicou na:");
  console.log(img);
});
*/

// Propriedades do "event" ou "e":
function callbackEvent(event) {
  console.log("Propriedades do event:");
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path; //caminho do evento
  console.warn(".currentTarget:");
  console.log(currentTarget);
  console.warn(".target:");
  console.log(target);
  console.warn(".type:");
  console.log(type);
  console.warn(".path:");
  console.log(path);
  console.warn("this:");
  console.log(this); //Geralmente igual ao event.currentTarget
}
h2Animais.addEventListener("click", callbackEvent);

/*----------Tipos diferentes de eventos:
const h1 = document.querySelector("h1");
function callback(event) {
  console.log(event.type, event);
}
h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback);
window.addEventListener("scroll", callback);
window.addEventListener("resize", callback);
window.addEventListener("keydown", callback);
*/

function handleKeyboard(event) {
  switch (event.key) {
    case "a":
      console.log("Você digitou o A");
      break;
    case "b":
      console.log("Você digitou o B");
      break;
    case "f":
      document.body.classList.toggle("fullscreen");
      console.log("Fullscreen toggle :D");
      break;
    default:
      console.log("Digite A, B ou T :)");
      break;
  }
}
window.addEventListener("keydown", handleKeyboard);

//Também podemos add um evento para cada item (forEach + addEventListener):
function handleImgs(event) {
  //Pra cada img mostra o src dela:
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImgs);
});

//----------------Exercícios 2:
console.error("Exercícios 2:");

/* Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
o comportamento padrão desses links */

//const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
function handleInternalLinks(event) {
  event.preventDefault();
  //Remove a classe ativo de todos os itens:
  linksInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  //E só deixa a do clicado atualmente:
  event.currentTarget.classList.add("ativo");
}

linksInterno.forEach((link) => {
  link.addEventListener("click", handleInternalLinks);
});

/* Selecione todos os elementos do site começando a partir do body,
ao clique mostre exatamente quais elementos estão sendo clicados */
const allBodyElements = document.querySelectorAll("body *"); //<- Todos que tão na tag body

allBodyElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    /* Mostra onde clicou: 
    console.log("Tu clicou no:");
    console.log(event.currentTarget);*/
    /* Remove o elemento clicado: 
    event.currentTarget.remove();*/
  });
});

// Se o usuário clicar na tecla "t", aumente todo o texto do site.
function handleClickT(event) {
  console.log(event.key);
  let tKey,
    plusKey = false;

  if (event.key === "t") {
    tKey, (plusKey = true);
    //document.documentElement.classList.toggle("textoMaior");
    console.log("Texto aumentado :)");
  }
}

window.addEventListener("keydown", handleClickT);

//6----------------Traversing e Manipulação:
console.error("Exemplo6 - Traversing e Manipulação:");

//
