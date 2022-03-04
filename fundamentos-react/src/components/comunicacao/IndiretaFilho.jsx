import React from "react";

export default (props) => {
  const cb = props.quandoClicar;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          cb("José", 52, true);
        }}
      >
        fornecer Informacoes
      </button>
    </div>
  );
};
