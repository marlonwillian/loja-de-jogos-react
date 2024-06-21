import Container from "../Container";
import GiftButton from "../GiftButton";
import CartButton from "../CartButton";
import styles from "./GiftCards.module.css";
import jogos from "../../json/games.json";
import { convertPrice } from "../CartButton";
import { useEffect, useState } from "react";
import psGift from "./img/pscards.png";
import kratos from "./img/kratos.png";
import sm from "./img/sm.png";

import nsGift from "./img/nscards.png";
import link from "./img/link.png";
import mario from "./img/mario.png";

import xbGift from "./img/xbcards.png";
import masterchief from "./img/masterchief.png";
import chai from "./img/chai.png";

function GiftCards({ plataform, firstColor, secondColor }) {
  const [selectedPrice, setPrice] = useState("")

  function selectPrice(id, price) {
    setPrice([id, price])
  }

  const plataformImages = {
    "PlayStation": [kratos, psGift, sm],
    "Nintendo": [mario, nsGift, link],
    "Xbox": [masterchief, xbGift, chai]
    // "PC": dezeseis,
  };

  const imagesStyles =  {
    "PlayStation": [styles.pspersonagem1, styles.psgifts, styles.pspersonagem2],
    "Nintendo": [styles.nspersonagem1, styles.nsgifts, styles.nspersonagem2],
    "Xbox": [styles.xbpersonagem1, styles.xbgifts, styles.xbpersonagem2]
  }

  return (
    <Container isGift={true}>
      <div 
        className={styles.giftCard} 
        style={{background: `linear-gradient(0deg, #000000f4 25%, #00000069 50%, #${firstColor} 85%)`}}
      >
        <hr className={styles.line} />
        <div className={styles.description}>
          <h1>Gift Cards {plataform}</h1>
          <h3>Adicione saldo a sua carteira digital da {plataform}.</h3>
        </div>
        <div className={styles.images}>
          <img src={plataformImages[plataform][0]} className={imagesStyles[plataform][0]}/>
          <img src={plataformImages[plataform][1]} className={imagesStyles[plataform][1]}/>
          <img src={plataformImages[plataform][2]} className={imagesStyles[plataform][2]}/>
        </div>
        <section 
          className={`
            ${styles.gfSection} 
            ${selectedPrice ? styles.gfSection1 : styles.gfSection2}
          `} 
          style={{boxShadow: `0px 0px 15px #${secondColor}`}}
        >
          {
            jogos.map(
              (jogo) => plataform === jogo.plataform ?
                <div
                  className={styles.price}
                  onClick={() => selectPrice(jogo.id, jogo.preco)}
                  style={{
                    backgroundColor: jogo.preco == selectedPrice[1] ? "white" : null,
                    color: jogo.preco == selectedPrice[1] ? `#${secondColor}` : null
                  }}
                >
                  R$ {convertPrice(jogo.preco)}
                </div> : null
            )
          }
          <CartButton
            id={selectedPrice[0]}
            price={selectedPrice[1]}
            gamePage={true}
            isGift={true}
            opacity={
              selectedPrice == "" ? 0 : 1
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default GiftCards;