import { Banner } from "Components/Banner";
import styles from "./Favoritos.module.css";
import { Card } from "Components/Card";
import { Titulo } from "Components/Titulo";

export const Favoritos = () => {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          capa="https://i.pinimg.com/236x/d4/cf/02/d4cf02c105ccbcea5c4d571fa0fb948d.jpg"
          titulo="Sabo o filme"
        />
        <Card
          capa="https://i.pinimg.com/736x/b2/dd/7f/b2dd7f999440dbd3499f439db5d5cda6.jpg"
          titulo="Sabo o filme 2"
        />
      </section>
    </>
  );
};
