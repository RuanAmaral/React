import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
// const elemento = document.getElementById('root')

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro Titulo="segundoComponente" Subtitulo="BomZinho" ></ComParametro>

    </div>,
    document.getElementById('root') )