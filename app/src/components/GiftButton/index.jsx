import CartButton from "../CartButton";
import styles from "./GiftButton.module.css";
import jogos from "../../json/games.json";
import { convertPrice } from "../CartButton";

function GiftButton({ price }) {
  return (
    <>
      <div className={styles.price}>
        R$ {convertPrice(price)}
      </div>
    </>
  );
}

export default GiftButton;