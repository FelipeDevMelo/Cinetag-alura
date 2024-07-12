import styles from "./Card.module.css";
import iconeFavoritar from "./favoritarIcon.png";
import { useFavorito } from "../../Context/Favoritos";
export const Card = ({ id, titulo, capa }) => {
  const { favorito, adcionarFavorito } = useFavorito();
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adcionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
};
