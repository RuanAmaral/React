import React, { useCallback } from "react";
import If from "./If";

export default props =>{
    let usuario = props.usuario || {}
    return(
        <div>
           <If test = {usuario && usuario.nome}>
            Seja bem vindo {usuario.nome}
           </If>
        </div>
    )
}