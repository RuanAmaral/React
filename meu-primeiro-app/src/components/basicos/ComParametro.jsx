import React from "react"
export default function ComParametro(parametro) {
    console.log(parametro)
    return(
        <div>
            <h2>{parametro.Titulo}</h2>
            <h3>{parametro.Subtitulo}</h3>
        </div>
    )
}