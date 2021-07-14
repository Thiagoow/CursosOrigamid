import React from "react";

/* Exemplos básicos de uso: */
const Title = (props) => {
  return <h2>{props.txt}</h2>;
};
const Texto = ({ cor, fundo, txt }) => {
  return <p style={{ color: cor, background: fundo }}>{txt}</p>;
};

/* Um componente também pode possuir child's. */

const App = () => {
  return (
    <>
      <div align="center">
        <Title txt="App" />
        <Texto cor="white" fundo="red" txt="Teste :D" />
      </div>

      <div align="center" style={{ marginTop: "2rem" }}>
        <Title txt="ChildrenProps:" />
      </div>
    </>
  );
};

export default App;
