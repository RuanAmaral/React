import React, { useState } from "react";

import './input.css'

export default (props) => {
  let [valor, setValor] = useState("inicial");

  function muda(evento) {
    setValor(evento.target.value);
    // console.log(evento);
  }
  return (
    <div>
      <p>{valor}</p>
      <div className="inputtt">
        <input type="text" value={valor} onInput={muda} /> {/*controlavel*/}
        <input type="text" value={valor} readOnly /> {/* sómente leitura*/}
        <input type="text" value={undefined} /> {/*não contralavel*/}
      </div>
    </div>
  );
};
