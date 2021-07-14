import React from "react";
import Titulo from "../atoms/Title";
import Product from "../molecules/Product";

const Produtos = () => {
  const estoque = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] }
  ];

  return (
    <section>
      <Titulo txt="Produtos" />
      <p>Esses sãos os produtos que temos no estoque:</p>

      <div align="left">
        {estoque.map((i) => (
          /* O "..." é o operador REST, o qual 
          está herdando ao componente "Product",
          as props de cada item da array "estoque": */
          <Product key={i.nome} {...i} />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
