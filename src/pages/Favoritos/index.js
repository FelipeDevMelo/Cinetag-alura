import { Banner } from "Components/Banner";
import styles from "./Favoritos.module.css";
import { Card } from "Components/Card";
import { Titulo } from "Components/Titulo";
import { useFavorito } from "Context/Favoritos";

export const Favoritos = () => {
  const { favorito } = useFavorito();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((favorito) => (
          <Card {...favorito} key={favorito.id} />
        ))}
      </section>
    </>
  );
};
