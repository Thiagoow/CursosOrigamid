/* Função normal: 
function upperCase(text) {
  //Não esquecer do retorno, se não dá "undefined"
  return text.toUpperCase();
}*/
/* Como arrow function: */
const upperCase = (text) => text.toUpperCase();

console.log(upperCase("texto"));

// --------------Desestruturando:
/* Original: 
function mousePosition(event) {
  //Defino 1 variável pra cada item que eu quero do objeto event:
  const posY = event.clientY;
  const posX = event.clientX;
  console.log(posX, posY);
}*/

/* Desestruturada: */
function mousePosition(event) {
  //Pego só o que eu quero dentro do objeto event:
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

/*  MAIS desestruturada: 
function mousePosition(clientX, clientY) {
  //Define como argumento aquilo que eu quero e exibo no console:
  console.log(clientX, clientY);
}*/
document.addEventListener("click", mousePosition);
