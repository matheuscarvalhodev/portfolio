import React from "react";
import ProjectCard from "../../componentes/ProjectCards";
import { projetos } from "./Projetos";
import "./Projetos.scss";

export default function Projetos({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="projeto-content" id={id}>
        <h1>Projetos</h1>
        <div className="projetosGrid">
          {
            projetos.map(
              (projeto) => (<ProjectCard key={projeto.title} image={projeto.image} title={projeto.title} description={projeto.description} flag={projeto.flag} link={projeto.link}/>)
            )
          }
        </div>
      </div>
    </div>
  );
}
