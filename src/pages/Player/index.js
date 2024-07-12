import { Banner } from "Components/Banner";
import styles from "./Player.module.css";
import { Titulo } from "Components/Titulo";
import { useParams } from "react-router-dom";
import Videos from "json/db.json";
import { NaoEncontrada } from "pages/NaoEncontrada";
import { useEffect, useState } from "react";
export const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/videos/?id=${parametros.id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);
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
