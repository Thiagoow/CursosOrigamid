import React from "react";

/* Mudando o estado com useState a partir de uma
função no componente botão: */
const App = () => {
  //Essas vars começam com o estado (true):
  let [ativo, setAtivo] = React.useState(true);
  /* Sendo a convenção da comunidade do React, definir
  o nome da função que mudará o estado de uma var como:
  "setNomeDaVarQueVaiMudar". */

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  );
};

/* Alterando múltiplos estados: */
const App2 = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [user, setUser] = React.useState({
    nome: "Thiago Silva Lopes",
    idade: "18"
  });

  function whenClick() {
    //Muda o valor da var ativo:
    setAtivo(!ativo);
  }

  /* Atualizar o estado de um objeto, mantendo todas suas infos, 
  mas adicionando um novo atributo = Usar o operador spread na
  função "setNomeDaVarQueVaiMudar". */
  function insertUserData() {
    /* Insere o atributo "faculdade: true", mas só depois de ter
    inserido todas as infos já existentes na var/array/objeto: */
    setUser({ ...user, faculdade: true });
  }
  //Executa a função acima quando a página for carregada:
  window.onload = insertUserData;

  return (
    <div align="center">
      <p>{user.nome}</p>
      <p>{user.idade}</p>

      {user.faculdade ? (
        <p>Possui ensino superior</p>
      ) : (
        /* Quando */
        <p></p>
      )}

      <button onClick={whenClick}>{ativo ? "Active" : "Inactive"}</button>
    </div>
  );
};

export default App2;
