import styles from "./Card.module.css";
import iconeFavoritar from "./favoritarIcon.png";
import icondeDesfavoritar from "./desfavoritarIcon.png";
import { useFavorito } from "../../Context/Favoritos";
import { Link } from "react-router-dom";
export const Card = ({ id, titulo, capa }) => {
  const { favorito, adcionarFavorito } = useFavorito();
  const ehFavotiro = favorito.some((fav) => fav.id === id);
  const icone = ehFavotiro ? icondeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adcionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
};
