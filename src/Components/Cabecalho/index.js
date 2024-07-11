import { Link } from "react-router-dom";
import Logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "Components/CabecalhoLink";
const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={Logo} alt="Logo do cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;
