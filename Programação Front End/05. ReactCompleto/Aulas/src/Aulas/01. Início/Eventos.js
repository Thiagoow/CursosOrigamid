import React from "react";

/* Evento que executa função ao click: */
const App = () => {
  function handleClick(event) {
    alert("Comprou: " + event.target.innerText);
  }

  return (
    <div align="center">
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

/* Função anônima -> Função dentro do próprio evento: */
const App2 = () => {
  return (
    //Liga e desliga a classe de nome "ativa" para o botão:
    <button onClick={({ target }) => target.classList.toggle("ativa")}>
      Ativar
    </button>
  );
};

/* Eventos na janela, ou na DOM -> Eventos no window, no document ou 
qualquer elemento fora do React, devem ser adicionados com JavaScript,
usando o addEventListener. */
const App3 = () => {
  function handleScroll(event) {
    console.log(event);
  }
  /* Sempre que dermos scroll na tela, 
  mostra o evento de scroll no console: */
  window.addEventListener("scroll", handleScroll);

  return <div style={{ height: "200vw" }}>Div</div>;
};

export default App2;
