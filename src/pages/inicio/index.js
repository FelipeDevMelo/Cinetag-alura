import { Banner } from "Components/Banner";
import Cabecalho from "Components/Cabecalho";
import { Card } from "Components/Card";
import { Rodape } from "Components/Robape";
import { Titulo } from "Components/Titulo";
import Videos from "json/db.json";
import styles from "./inicio.module.css";
const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {Videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      <Rodape />
    </>
  );
};

export default Inicio;
