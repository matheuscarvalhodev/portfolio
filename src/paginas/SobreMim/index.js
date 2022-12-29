import "./SobreMim.scss"
import {primeiroParagrafo, segundoParagrafo, terceiroParagrafo} from "./SobreMim.js";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Carousel from "../../componentes/Carousel";

export default function SobreMim({dark, id}){

    function LinkRenderer(props) {
        return (
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        );
      }

    return(
        <section className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>Sobre Mim</h1>
                <div className="primeiroParagrafo">
                    <img className="foto" src="./imagens/perfil.png" alt="Foto Perfil Matheus"/>
                    <ReactMarkdown components={{ a: LinkRenderer }} className="primeiroTexto">{primeiroParagrafo}</ReactMarkdown>
                </div>
                <div className="segundoParagrafo">
                  <ReactMarkdown components={{ a: LinkRenderer }} className="paragrafoSobreMim">{segundoParagrafo}</ReactMarkdown> 
                </div>
                <Carousel/>
                <ReactMarkdown components={{ a: LinkRenderer }} className="paragrafoSobreMim">{terceiroParagrafo}</ReactMarkdown>
            </div>
        </section>
    )
}