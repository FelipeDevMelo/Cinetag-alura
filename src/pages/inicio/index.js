import { Banner } from "Components/Banner";
import Cabecalho from "Components/Cabecalho";
import { Rodape } from "Components/Robape";

const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  );
};

export default Inicio;
