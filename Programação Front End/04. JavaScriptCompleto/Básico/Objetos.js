//Exemplo1----------------------------
console.warn("Exemplo1:");

var pessoa = {
  nome: "André",
  sobrenome: "Rafael",
  idade: 28,
  cidade: "Rio de Janeiro"
};
console.log(pessoa);

//Exemplo2----------------------------
console.warn("Exemplo2:");
var quadrado = {
  lados: 4,
  area(lado) {
    return "Área= " + lado * lado;
  },
  perimetro(lado) {
    return "Perímetro= " + this.lados * lado;
  }
};
console.log(quadrado.area(5), quadrado.perimetro(5));

//Exemplo3----------------------------
console.warn("Exemplo3:");

/* Crie um objeto de um cachorro que represente 
um rottweiler castanho com 10 anos, que late ao 
ver um bandido: */
var cachorro = {
  raca: "rottweiler",
  cor: "castanho",
  idade: 10,
  observa(pessoa) {
    if (pessoa === "bandido") {
      return "ATACAR BANDIDO!! WOOF WOOF 😡";
    } else {
      return "No és bandido 😊";
    }
  }
};
console.log(cachorro);
//Executa a função latir, dando a ela o parâmetro ("x"):
console.log(cachorro.observa("bandido"));

//Exemplo4----------------------------
console.warn("Exemplo4:");

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  escondeLinks() {
    return this.width / 2;
  }
};
var bg = menu.backgroundColor;
console.log(`Antes o fundo do menu tinha a cor: ${bg}`);

//Muda a propriedade X desse objeto:
menu.backgroundColor = "#000";

function escondeMenu() {
  /* Define uma nova width pra esse objeto 
  usando a função dentro dele mesmo: */
  menu.width = menu.escondeLinks();
  //Adiciona o atributo esconder nesse objeto:
  menu.esconder = "Escondi";
}
escondeMenu();

console.log(menu);
