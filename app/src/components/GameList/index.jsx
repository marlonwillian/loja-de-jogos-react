import styles from "./GameList.module.css";
import SearchCard from "../SearchCard";
import games from "../../json/games.json";
import { convertPrice } from "../CartButton";

function GameList({ jogos, cart, display, width, height }) {
    let total = 0;

    jogos.map((jogo) => 
        typeof(games[jogo.id].discount) == "number" ? 
        total += jogo.price - (jogo.price * (games[jogo.id].discount/100)) 
        : 
        total += jogo.price
    )

    return (
        <>
            <div 
                className={`${cart ? styles.cartCard : styles.searchCard}`} 
                style={{ 
                    display: jogos == 0 || cart == true ? "none" : "block", 
                    display: display, width: width, height: height 
                }}
            >
                {   
                    jogos.map((jogo) => 
                        <div>
                            <SearchCard
                                cart={cart}
                                id={jogo.id}
                                price={jogo.price}
                            />
                        </div>
                    ) 
                }
            </div>
            <div 
                className={styles.summary} 
                style={{ display: cart ? "block" : "none"}}
            >
                <hr className={styles.line}/>
                <div className={styles.summaryItens}>
                    <span className={styles.productQt}>
                        {`${jogos.length} ${jogos.length == 1 ? "Produto" : "Produtos" }`}
                    </span>
                    <span className={styles.total}>
                        Total: R$ {convertPrice(total)}
                    </span>
                </div>
                <button className={styles.button}>Finalizar compra</button>
            </div>
        </>
    );
}

export default GameList;