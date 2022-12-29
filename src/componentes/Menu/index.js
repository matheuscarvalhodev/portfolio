import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Menu.scss";
import MenuLink from "../MenuLink";
import { CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">

        <div className="logo">
          <div className="imagemLogo">
            <h1>MC</h1>
          </div>
        </div>

        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul className="nav-items">
            <li className="nav-item">
              <MenuLink to={"section1"} children={"Inicio"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"section2"} children={"Sobre Mim"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"section3"} children={"Habilidades"}/>
            </li>
            <li className="nav-item">
            <MenuLink to={"section4"} children={"Projetos"}/>
            </li>
          </ul>
          <img className="logoNav" src="/imagens/muiraquita-branco.png" alt="logo"/>
            <div className="linkSocialMedia">
              <a
              className="socialMedia"
              href="https://www.linkedin.com/in/matheus-carvalho-dev/"
              target="_blank"
              rel="noreferrer"
              >
              <CiLinkedin size={30}/>
              </a>
              <a
              className="socialMedia"
              href="https://github.com/matheuscarvalhodev"
              target="_blank"
              rel="noreferrer"
              >
              <VscGithub size={26}/>
              </a>
            </div>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      
      </div>
      <div className="grafismo">by Matheus Carvalho</div>
    </header>
  );
}

export default Menu;