import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import FilterPlataform from "../FilterPlataform";
import CartButton from "../CartButton";

function Card({ id, title, price, discount, color, img }) {
  return (
    <section className={styles.section}>
      <div className={styles.card} style={{ backgroundColor: color }}>
        <Link className={styles.link} to={`/jogo/${id}`}>
          <img
            src={img}
            alt="Capa"
            className={styles.cover}
          />
          <span className={styles.title}>
            {`${title}`}
          </span>
        </Link>
        <div className={styles.div_plataforms}>
          <FilterPlataform fontsize="7px" id={`${id}`} onlylogo="true" nintendosize="20px" steamsize="20px" />
        </div>
        <CartButton margintop="60px" price={price} discount={discount} id={id} opacity="1"/>
      </div>
    </section>
  );
}

export default Card;
