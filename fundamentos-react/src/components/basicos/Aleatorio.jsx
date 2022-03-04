import React from "react";

export default (props) => {
  let { min, max } = props;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>valor minimo: {min}</p>
      <p>valor maximo: {max}</p>
      <p>Valor sorteado: {Math.floor(Math.random() * (max - min + 1)) + min}</p>
    </div>
  );
};
