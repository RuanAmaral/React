import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  let [nomee, setNome] = useState("jorel");
  let [idadee, setIdade] = useState(26);
  let [nerdd, setNerd] = useState(false);
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)

  }
  return (
    <div>
      <div>
        <span>{nomee}</span>
        <span>{idadee}</span>
        <span>{nerdd?'Verdadeiro':'Falso'}</span>
      </div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
