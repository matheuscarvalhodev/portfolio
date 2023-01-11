import React from "react";
import "./Inicio.scss";
import { BsDownload } from 'react-icons/bs';

export default function Inicio({id }) {
  return (
    <section className="inicio-section">
      <div className="inicio-content" id={id}>
        <div className="texto">
          <div>
            <h1>Olá, sou Math</h1>
            <p>Desenvolvedor Backend, amante de Frontend e apaixonado por Ciencia de Dados</p>
            <a href="./curriculo.pdf" id="download" download><button className="butao-download">Download CV <BsDownload size={18}/></button></a>
          </div>
          <div><img src="./imagens/grafismo_Indigena2.png" alt="Grafismo Indigena"/></div>
        </div>
        <div className="imagem">
          <img src="./imagens/grafismo_Indigena2.png" alt="Grafismo Indigena"/>
        </div>
      </div>
    </section>
  );
}
