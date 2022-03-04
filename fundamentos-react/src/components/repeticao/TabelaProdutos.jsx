import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Nome Do Produto</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {produtos.map((produto) => {
            return (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
