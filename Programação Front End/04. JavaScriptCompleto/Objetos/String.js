/* Função construtora de Strings, toda string possui
as propriedades e métodos do prototype de String. */

const linguagem = "Javascript";
const liquido = new String("Água");
const ano = new String(2018);
console.log(linguagem);
console.log(liquido);
console.log(ano);

const frase = "A melhor linguagem é ";

//------Length:

linguagem.length; // 5
frase.length; // 15

linguagem[0]; // J
frase[0]; // A
frase[frase.length - 1];
/* ☝🏼 ' ' -> Último caractere da String
Msm coisa de fazer: frase.slice(-1) */

//------Concat:

const fraseCompleta = frase.concat(linguagem, "! 😎");
console.log(fraseCompleta);

//------CharAt:

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

//------Includes:

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

//EndsWith & StartsWith (CASE SENSITIVE SEARCH):

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false

/*------Slice -> Traz do caractere X ao Y de uma String 
(NÃO REMOVE, APENAS TRAZ OS CARACTERES): */
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep -> 3 primeiros caracteres
transacao2.slice(3, 0); // dor --> 3 últimos caracteres

transacao1.slice(12); // cliente -> 12 primeiros caracteres
transacao1.slice(-4); // ente --> 4 últimos caracteres
transacao1.slice(3, 6); // ósi --> 3 primeiros até os 6 caracteres
console.log(transacao1, transacao2, transacao3);

/*---------IndexOf & LastIndexOf:
Index -> Index do primeiro resultado do caractere buscado
LastIndexOf -> Index do último resultado do caractere buscado*/
const instrument = "Guitarra";

instrument.indexOf("r"); // 5
instrument.lastIndexOf("r"); // 6
instrument.indexOf("ta"); // 3

/*------Split:
Divide a string de acordo com o parâmetro
e retorna uma array: */
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");
console.log(listaItens);
console.log(arrayItens);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
/* Join --> Método de array que add um separador: */
const htmlNovo = htmlArray.join("section");
console.log(htmlText);
console.log(htmlNovo);

//---------------Exercícios:
console.warn("Exercícios:");

/* Utilizando o foreach na array abaixo,
some os valores de Taxa e os valores de Recebimento */

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39"
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129"
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99"
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129"
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49"
  }
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((i) => {
  const numSemCifrão = i.valor.replace("R$ ", "");

  if (i.descricao.includes("Taxa")) {
    taxaTotal += Number(numSemCifrão);
  } else {
    recebimentoTotal += Number(numSemCifrão);
  }
});
console.log("Total da Taxa: R$" + taxaTotal);
console.log("Total de Recebimento: R$" + recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

//Split retorna uma array, então podemos usar o método join:
const arrayHtml = html.split("span").join("a");
console.log(arrayHtml);

// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial"
];

let numTaxas = 0;

transacoes1.forEach((i) => {
  i = i.toLowerCase();
  i = i.trim();
  //console.log(i);

  /* StartsWith -> case sensitive, 
  por isso convertemos pra lowerCase
  primeiro antes de verificar 😉*/
  if (i.startsWith("taxa")) {
    numTaxas++;
  }
});
console.log(`A array transações1 possui ${numTaxas} taxas`);
