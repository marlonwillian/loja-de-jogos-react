import styles from "./GameInfo.module.css";
import jogo from "../../json/games.json";
import dez from "./img/10.png";
import doze from "./img/12.png";
import quatorze from "./img/14.png";
import dezeseis from "./img/16.png";
import dezoito from "./img/18.png";
import livre from "./img/livre.png";
import { useEffect, useState } from "react";

function GameInfo({ id }) {
  const ratingsImages = {
    "dez": dez,
    "doze": doze,
    "quatorze": quatorze,
    "dezeseis": dezeseis,
    "dezoito": dezoito,
    "livre": livre
  };

  const image = ratingsImages[jogo[id].rating];

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className={styles.gameInfo} 
      style={{
        marginTop: typeof(jogo[id].preco) == "number" && window.innerWidth <= 825 ? "-16px" : ""
      }}
    >
      <div 
        className={styles.gameDetails}
        style={{
          marginTop: typeof(jogo[id].preco) == "number" 
          && window.innerWidth <= 825 && window.innerHeight <= 650 ? "25px" 
          : typeof(jogo[id].preco) == "number" 
          && window.innerWidth <= 825 && window.innerHeight > 650 ? "-10px" : "" 
        }}
      >
        <span>
          <i
            class="fa-solid fa-microphone-lines"
            style={{ marginRight: "21px" }}
          ></i>
          Voz em PT-BR:
          <span style={{ marginLeft: "78px" }}>{jogo[id].info[0]}</span>
          <br />
        </span>
        <span>
          <i
            class="fa-solid fa-closed-captioning"
            style={{ marginRight: "14px" }}
          ></i>
          Legendas em PT-BR:
          <span style={{ marginLeft: "23px" }}>{jogo[id].info[1]}</span>
          <br />
        </span>
        <span>
          <i
            class="fa-solid fa-gamepad"
            style={{ marginRight: "11px" }}
          ></i>
          Gêneros:
          <span style={{ marginLeft: "133px" }}>{jogo[id].info[2]}</span></span>
        <br />
        <span>
          <i
            class="fa-solid fa-calendar-check"
            style={{ marginRight: "19px" }}
          >
          </i>
          Lançamento:
          <span style={{ marginLeft: "97px" }}>{jogo[id].info[3]}</span>
        </span>
      </div>
      <div 
        className={styles.rightInfo} 
        style={{marginTop: typeof(jogo[id].preco) == "number" 
          && window.innerWidth <= 825 && window.innerHeight <= 650 ? "70px" 
          : typeof(jogo[id].preco) == "number" 
          && window.innerWidth <= 825 && window.innerHeight > 650 ? "100px" : ""
        }}
      >
        <span
          className={styles.age}
        >
          <img src={image} style={{ width: "70px" }} />
        </span>
        {
          jogo[id].online == "2" ?
            <div className={styles.onlineInfo}>
              <span styles={{ paddingBottom: "1px" }}>1 Jogador</span>
              <hr className={styles.linha} />
              <span>Jogo Online</span>
            </div>
            : jogo[id].online == "3" ?
              <div className={styles.onlineInfo}>
                <span styles={{ paddingBottom: "1px" }}>
                  1 Jogador/Cooperativo
                </span>
                <hr className={styles.linha} />
                <span>Jogo Online</span>
              </div>
              : <div className={styles.onlineInfo}>
                <span styles={{ paddingBottom: "1px" }}>{jogo[id].online}</span>
              </div>
        }
      </div>
    </section>
  );
}

export default GameInfo;