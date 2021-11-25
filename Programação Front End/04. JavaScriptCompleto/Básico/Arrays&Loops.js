/* Operadores de comparação:
> --> Maior que (x)
< --> Menor que (x)
== (2*=) --> Tem valor igual a (x) 
!= (!+=) -->  É diferente de (x)
=== (3*=)--> Tem valor e tipo igual a (x) 
>= (2*>) --> Maior ou igual a (x)
<= (2*<) --> Menor ou igual a (x)
*/

//Exemplo1----------------------------
console.warn("Exemplo1:");

//Soma +1 a var num até 3 (menor que 4)
for (let numero = 1; numero < 4; numero++) {
  console.log(numero);
}

//Exemplo2----------------------------
console.warn("Exemplo2:");

let i = 0;
//Soma de 5 em 5 até 10):
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

//Exemplo3----------------------------
console.warn("Exemplo3:");

const frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index) {
  //Tira o item X da array:
  frutas.pop();
  //Exibe o item X com seu index e nova array com ele removido:
  console.log(fruta, index, frutas);
});

//Exemplo4----------------------------
console.warn("Exemplo4:");

//Coloca o último item da array de frutas numa var, sem retirar ela da array
const ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

//Exemplo5----------------------------
console.warn("Exemplo5:");

const brasilCampeao = [1959, 1962, 1970, 1994, 2002];

/* Crie uma array com os anos que o Brasil ganhou a copa
1959, 1962, 1970, 1994, 2002 */
for (let i = 0; i < brasilCampeao.length; i++) {
  console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

//Exemplo6----------------------------
console.warn("Exemplo6:");

const videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (let item = 0; item < videoGames.length; item++) {
  //Vai exibindo cada um dos itens no console:
  console.log(videoGames[item]);
  //Quando chegar no item X para e não continua exibindo:
  if (videoGames[item] === "XBOX") {
    break;
  }
}

//Exemplo7----------------------------
console.warn("Exemplo7:");

let numero = 0;
const maximo = 5;
//Exibe a ordem CRESCENTE da var numero até a var máximo
for (; numero <= maximo; ) {
  console.log(numero);
  numero++;
}

//Exemplo8----------------------------
console.warn("Exemplo8:");

let num = 5;
const mínimo = 0;
//Exibe a ordem DECRESCENTE da var num até a var mínimo
for (; num >= mínimo; ) {
  console.log(num);
  num--;
}
