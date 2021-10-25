import React from "react";
//Utilizados no componente App3:
import Modal from "./Aulas/02. Hooks/components/atoms/Modal";
import ButtonModal from "./Aulas/02. Hooks/components/atoms/ButtonModal";

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

/* Props -> Podemos passar o estado e a função de 
modificação(setVar) como propriedades para outros componentes:*/
const App3 = () => {
  //Estado definido no componente/elemento global (App.js):
  const [modal, setModal] = React.useState(false);

  return (
    <div align="center">
      {/* O componente "Modal" depende do estado global
      definido nesse componente para abrir ou não seu componente
      além disso, depende também da função setModal pra alterar o
      estado global e poder fechar esse componente: */}
      <Modal modal={modal} setModal={setModal} />

      {/* Já esse componente abaixo não mostra nada,
       apenas altera o estado para exibir ou não o componente
       "Modal": */}
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App3;
