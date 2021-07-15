import React from "react";

//Desestrutura como as vars usadas como prop no elemento global:
const Modal = ({ modal, setModal }) => {
  //Se modal === true:
  if (modal)
    //Retorna a Div com texto + botão dentro dela:
    return (
      <div>
        Esse é um modal.
        {/* Quando clicarmos no botão ele define o modal para falso: */}
        <button onClick={() => setModal(false)} style={{ marginLeft: "1rem" }}>
          Fechar
        </button>
      </div>
    );
  //Se modal === false, retorna nulo:
  return null;
};

export default Modal;
