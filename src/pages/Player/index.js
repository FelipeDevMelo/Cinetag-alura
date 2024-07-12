import { Banner } from "Components/Banner";
import styles from "./Player.module.css";
import { Titulo } from "Components/Titulo";
import { useParams } from "react-router-dom";
import Videos from "json/db.json";
import { NaoEncontrada } from "pages/NaoEncontrada";
export const Player = () => {
  const parametros = useParams();
  const video = Videos.find((video) => {
    return video.id === Number(parametros.id);
  });
  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};
