import React from "react";

import MegaSena from "./components/megasena/MegaSena"; 
import Contador from "./components/contadores/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import "./App.css";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <div className="Cards">
      <Card titulo="#14 - Mega Sena " color="#003008">
          <MegaSena valorSortear={6} ></MegaSena>
        </Card>
        <Card titulo="#13 - Contador " color="#DB222A">
          <Contador numeroInicial={10}></Contador>
        </Card>
        <Card titulo="#12 - Formularios " color="#3A0CA3">
          <Input></Input>
        </Card>
        <Card titulo="#11 - Comunicação Indireta " color="#56064A">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="#10 - Comunicação Direta " color="#001219">
          <DiretaPai></DiretaPai>
        </Card>
        <Card titulo="#09 - Par ou Impar " color="#03045E">
          <ParOuImpar numero="5"></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Joel" }}></UsuarioInfo>
        </Card>
        <Card titulo="#08 - Desafio de Repetição " color="#5C5403">
          <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card titulo="#07 - Repetição " color="#219E35">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#06 - Componente com Filho" color="#4F6B4C">
          <Familia sobreNome="Ferreiro">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Rony" />
            <FamiliaMembro nome="Raphael" sobreNome="Veiga" />
          </Familia>
        </Card>

        <Card titulo="#05 - Exemplo de Card" color="#511"></Card>
        <Card titulo="#04 - Desafio Aleatorio" color="#999">
          <Aleatorio min={1} max={60}></Aleatorio>
        </Card>
        <Card titulo="#03 - Fragmento" color="#f51">
          <Fragmento></Fragmento>
        </Card>
        <Card titulo="#02 - ComParametro" color="#ff0">
          <ComParametro
            Titulo="segundoComponente"
            Subtitulo="comParametro"
          ></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#f1f">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
