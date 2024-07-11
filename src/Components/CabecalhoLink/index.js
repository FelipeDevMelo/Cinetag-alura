import { Link } from "react-router-dom";
import style from "./CabecalhoLink.module.css";

const CabecalhoLink = ({ children, url }) => {
  return (
    <Link className={style.link} to={url}>
      {children}
    </Link>
  );
};

export default CabecalhoLink;
