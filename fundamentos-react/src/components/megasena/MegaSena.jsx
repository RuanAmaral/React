import React, { useEffect, useState } from "react";

import "./MegaSena.css";

function sortear(valorSortear) {
  // let x =props.valorSortear
  let arr = [];

  let valores = [];
  for (let i = 0; i < 61; i++) {
    valores.push(i);
  }

  let valoresNovos = valores.sort(() => Math.random() - 0.5);

  for (let i = 0; i < valorSortear; i++) {
    arr.push(valoresNovos[i]);
  }

  return arr.map((v) => {
    console.log("entro");
    return <h2>{v}</h2>;
  });
}

function somaOuSbtrai(valor, maisOuMenos) {
  if (maisOuMenos) {
    return valor++;
  } else {
    return valor--;
  }
}

// let sorteioValor = sortear()

export default (props) => {
  const [controller, setController] = useState(false);
  const [sorteioValor, setSorteioValor] = useState();
  // let sorteioValor = sortear(props.valorSortear)
  useEffect(() => {
    setSorteioValor(sortear(valorSorteio));
  }, [controller]);

  const [valorSorteio, setValorSorteio] = useState(6);

  function mudaMaisOuMenos(boll) {
    if (boll) {
      setValorSorteio(valorSorteio + 1 === 11 ? 10 : valorSorteio + 1);
    } else {
      setValorSorteio(valorSorteio - 1 === 0 ? 1 : valorSorteio - 1);
    }
  }

  return (
    <div>
      <div id="sorteio" className="sorteio">
        {sorteioValor}
      </div>
      <div>
        <button onClick={() => setController(!controller)}>Sortear</button>
      </div>
      <div>
        <h5>{valorSorteio}</h5>
      </div>
      <div>
        <button onClick={() => mudaMaisOuMenos(false)}>-</button>
        <button onClick={() => mudaMaisOuMenos(true)}>+</button>
      </div>
    </div>
  );
};
