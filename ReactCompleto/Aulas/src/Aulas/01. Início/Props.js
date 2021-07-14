import React from "react";

/* Exemplos básicos de uso: */
const Title = (props) => {
  return <h1>{props.txt}</h1>;
};
const Texto = ({ cor, fundo, txt }) => {
  return <p style={{ color: cor, background: fundo }}>{txt}</p>;
};

/* Children: */

const App = () => {
  return (
    <>
      <div align="center">
        <Title txt="App" />
        <Texto cor="white" fundo="red" txt="Teste :D" />
      </div>

      <div align="center">
        <Title txt="ChildrenProps:" />
      </div>
    </>
  );
};

export default App;
