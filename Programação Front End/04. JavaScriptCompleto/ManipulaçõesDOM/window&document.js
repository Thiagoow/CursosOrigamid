// Retorna a url da página atual utilizando o objeto window:
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que possua a classe:
const elementoAtivo = document.querySelector("btn");

// Retorna a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const windowWidth = window.innerWidth;
console.log(windowWidth);

// Verifica se a URL da página é igual a:
if (hrefPagina === "http://127.0.0.1:5500/ExecutaOsJsFiles.html") {
  console.log("URL igual");
} else {
  console.log("URL diferente");
}
//Verifica a classe do objeto selecionado:
const btnSelecionado = document.querySelector("button");
const h1Classes = btnSelecionado.classList;

function testeClick() {
  console.log("Clicou em ", btnSelecionado.innerText);
}
btnSelecionado.addEventListener("click", testeClick);
