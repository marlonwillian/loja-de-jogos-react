import styles from "./SearchCard.module.css";
import { Link } from "react-router-dom";
import jogos from "../../json/games.json"
import { convertPrice } from "../CartButton";
import { useCartContext } from "../../context/Cart";

function SearchCard({ id, price, cart }) {
    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = cart == true ? "fa-solid fa-x" : null
    
    const originalPrice = typeof(jogos[id].preco) == "number" ? jogos[id].preco : jogos[id].preco[0];

    function verifyDiscount(id) {
        const discountPrice = originalPrice - (originalPrice * (jogos[id].discount/100));

        const prices = [convertPrice(originalPrice), convertPrice(discountPrice)]
        return prices
    }

    const edition = originalPrice == price && id < 80? 
    "Edição Padrão" : originalPrice != price && id < 80 ? "Edição Deluxe" : ""

    return (
        <>
            <Link 
                className={styles.link} 
                to={id < 80 ? `/redirect/${id}` : `/${jogos[id].plataform}`}
            >
                <div className={styles.searchGame}>
                    <img
                        src={jogos[id].cover}
                        alt="título do jogo"
                    />
                    <div className={styles.info}>
                        <span className={styles.title}>{jogos[id].title}</span>
                        <span className={styles.price}>
                            {
                                typeof (jogos[id].discount) == "number" ?
                                <span className={styles.discount}> -{jogos[id].discount}% </span>
                                :
                                null
                            }
                            {
                                cart != true && typeof (jogos[id].preco) != "string"?
                                    typeof (jogos[id].discount) != "number" ?
                                        <span style={{ fontSize: "10px" }}>
                                            <i 
                                                style={{marginRight: "5px",fontSize: "15px"}}
                                            >
                                                R$ {verifyDiscount(id)[0]}
                                            </i>
                                        </span>
                                    : 
                                    <span style={{ fontSize: "10px" }}>
                                        <i 
                                            style={{marginRight: "5px",fontSize: "15px",textDecoration: "line-through"}}
                                        >
                                            R$ {verifyDiscount(id)[0]}
                                        </i>
                                        <i 
                                            style={{marginRight: "5px",fontSize: "15px"}}
                                        >
                                            R$ {verifyDiscount(id)[1]}
                                        </i>
                                    </span>
                                : cart != true && typeof (jogos[id].preco) == "string" ?
                                    <i 
                                        style={{marginRight: "5px",fontSize: "15px"}}
                                    >
                                        Anunciado
                                    </i>
                                : cart === true && typeof (jogos[id].discount) == "number" ?

                                    <span>
                                        <i
                                            style={{
                                                marginRight: "5px",
                                                fontSize: "15px",
                                                textDecoration: "line-through"
                                            }}
                                        >
                                            R$ {convertPrice(price)}
                                        </i>
                                        <i style={{ fontSize: "15px" }}>
                                            R$ {
                                                convertPrice(
                                                    price - (price * (jogos[id].discount / 100))
                                                )
                                            }
                                        </i><br/>
                                        <i style={{ fontSize: "15px" }}>{edition}</i>
                                    </span>
                                : cart === true && typeof (jogos[id].discount) != "number" ?
                                    <span>
                                        <i style={{ fontSize: "15px" }}>
                                            R$ {convertPrice(price)}
                                        </i><br/>
                                        <i style={{ fontSize: "15px" }}>{edition}</i>
                                    </span>
                                : convertPrice(jogos[id].preco)
                            }
                        </span>
                    </div>
                </div>
            </Link>
            <i
                className={`${icone} ${styles.delete}`}
                style={{ fontSize: "13px" }}
                onClick={() => addCart({ id })}
            ></i>
        </>
    );
}

export default SearchCard;