import "./ProjectCards.scss";
import { VscGithub } from 'react-icons/vsc';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ProjectCard({image,title,description, flag,link}){
    function LinkRenderer(props) {
        return (
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        );
      }
    return(
        <div className="containerProject">
            <div className="cardProject">
                <div className={"back"}>
                    <h2 className={(flag ? "" : "opacidade")}>{title}</h2>
                    <img className={(flag ? "" : "opacidade")} src={image} alt={title}/>
                </div>
                <div className="front">
                    <ReactMarkdown components={{ a: LinkRenderer }}>{description}</ReactMarkdown>
                    <div className={(flag ? "linksProject" : "linksProjectNone")}>
                        <div className="link"><a href={link} target="_blank" rel="noreferrer"><VscGithub size={28}/></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}