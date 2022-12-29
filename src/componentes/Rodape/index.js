import { Link } from "react-scroll";
import styles from './Rodape.module.scss';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

export default function Rodape(){
    return(
        <footer className={styles.principal}>
            <div>
                <Link to="section1" style={{cursor:"pointer"}}><img className={styles.imagem} src="/imagens/muiraquita-branco.png" alt="muiraquita"/></Link>
            </div>
            <div >
                <nav className={styles.navegacao}>
                <a
                href="https://www.linkedin.com/in/matheus-carvalho-dev/"
                target="_blank"
                rel="noreferrer"
                >
                <CiLinkedin size={30}/>
                </a>
                <a
                href="https://github.com/matheuscarvalhodev"
                target="_blank"
                rel="noreferrer"
                >
                <VscGithub size={26}/>
                </a>
                </nav>
            </div>
        </footer>
    )
}