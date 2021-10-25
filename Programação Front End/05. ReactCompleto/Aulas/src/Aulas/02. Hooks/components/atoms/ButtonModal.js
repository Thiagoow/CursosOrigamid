import React from "react";

//Desestrutura como a var usada como prop lá no elemento global:
const ButtonModal = ({ setModal }) => {
  return (
    /* Quando clicarmos no botão ele define o modal como "true": */
    <button onClick={() => setModal(true)} style={{ marginTop: "1rem" }}>
      Abrir Modal
    </button>
  );
};

export default ButtonModal;
