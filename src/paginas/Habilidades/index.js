import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Cards from "../../componentes/Cards";
import { primeiroParagrafo, segundoParagrafo} from "./Habilidades";
import "./Habilidades.scss";

export default function Habilidades({dark, id }) {
    function LinkRenderer(props) {
        return (
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        );
      }
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <h1>Habilidades e Experiências</h1>
          <div className="areaHabilidade">
              <div className="textoHabilidades">
                  <ReactMarkdown components={{ a: LinkRenderer }} className="paragrafoHabilidades" children={primeiroParagrafo}/>
                  <ReactMarkdown components={{ a: LinkRenderer }} className="paragrafoHabilidades" children={segundoParagrafo}/>
              </div>
              <Cards/>
          </div>
        </div>
      </div>
    );
  }