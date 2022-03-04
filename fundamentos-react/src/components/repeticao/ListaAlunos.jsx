import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {alunos.map((aluno)=>{
            return <li key={aluno.id}>Nome : {aluno.nome} Nota: {aluno.nota}</li>
        })}

      </ul>
    </div>
  );
};
