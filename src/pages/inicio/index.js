import { Banner } from "Components/Banner";
import Cabecalho from "Components/Cabecalho";
import { Rodape } from "Components/Robape";
import { Titulo } from "Components/Titulo";

const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
};

export default Inicio;
