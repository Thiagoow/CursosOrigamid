import React from "react";

const Header = () => {
  return (
    <header style={{ background: "red" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
