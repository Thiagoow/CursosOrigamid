import React from "react";

/* Reatividade -> Ah não ser que seja uma array ou objeto,
NÃO podemos mudar o estado diretamente. E sim, SEMPRE utilizamos 
a função de atualização do estado, pois ela que garante a reatividade dos componentes. */
const App = () => {
  const [items, setItems] = React.useState(["Item 1", "Item 2"]);

  //Jeito ERRADO:
  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push("Novo Item");
  }

  //Jeito CERTO:
  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, "Novo Item"]);
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};

/* Reatividade via função de callback:
(TAMBÉM PODEMOS DEFINIR O ESTADO NO useState com uma 
função de callback. Assim: 
    React.useState(() => {
      const var = funçãoCallback;
      return var;
    });
*/
const App2 = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? "Está Ativo" : "Está Inativo"}
    </button>
  );
};

/* StrictMode do React ->  invoca duas vezes a renderização do componente, 
quando o estado é atualizado. Assim é possível identificarmos funções com 
efeitos coláterais (side effects) e eliminarmos as mesmas. */
const App3 = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  /* Funções com efeitos coláterais -> São aquelas que modificam estados que 
  estão fora das mesmas.*/
  function handleClick() {
    setContar((contar) => {
      /* Se o setItem ficar aqui, essa será uma função com efeitos colaterais:
      setItems((items) => [...items, "Item " + (contar + 1)]); */
      return contar + 1;
    });
    /* Para que essa não seja uma função com efeitos colaterais, devemos
    deixar a função setItems fora da setContar. Já que as duas alteram estados
    totalmente diferentes 😉 */
    setItems((items) => [...items, "Item " + (contar + 1)]);
  }

  return (
    <>
      {/* Pra cada item da array items, mostra ele numa <li>:*/}
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App3;
