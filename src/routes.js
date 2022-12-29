import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Habilidades from "./paginas/Habilidades";
import Projetos from "./paginas/Projetos/";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <>
      <Menu/>
      <Inicio
          id="section1"
        />
        <SobreMim
          dark={true}
          id="section2"
        />
        <Habilidades
          dark={false}
          id="section3"
        />
        <Projetos
          dark={true}
          id="section4"
        />
        <Rodape/>
    </>
  );
}

export default AppRoutes;
