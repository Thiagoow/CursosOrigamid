import React from "react";

//Desestrutura pra pegar a prop dados:
const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />

      <p style={{ color: "aquamarine", fontWeight: "bold" }}>Preço:</p>
      <p style={{ color: "gold" }}>R$ {dados.preco}</p>

      <p style={{ color: "aquamarine", fontWeight: "bold" }}>Descrição:</p>
      <p>{dados.descricao}</p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        Email do vendedor: {dados.usuario_id}
      </p>
    </div>
  );
};

export default Produto;
