import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/Cart";
import styles from "./CartButton.module.css";
import { useEffect, useState } from "react";

export const convertPrice = (price) => Number(price).toFixed(2).replace('.', ',');

function CartButton({ id, price, discount, gamePage, margintop, position, bottom, marginleft, opacity, isCarrossel, isGift }) {
    let desconto = discount / 100
    desconto = desconto * price
    let newPrice = price - desconto

    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = noCart ? "fa-solid fa-xmark" : "fa-solid fa-cart-plus"

    const [paginaCarregada, setPaginaCarregada] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (
            !isNaN(price) && noCart && paginaCarregada
            && location.pathname.includes('/jogo/')
        ) {
            addCart({ id, price })
        }
    }, [price]);

    useEffect(() => {
        setPaginaCarregada(true);
    }, []);

    return (
        <>
            <button
                className={`
                    ${styles.btn} 
                    ${
                        isCarrossel ? styles.btnCarrossel : 
                        isGift ? styles.btnGift : ""
                    }
                `}
                style={{
                    marginTop: margintop,
                    bottom: bottom,
                    marginLeft: marginleft,
                    transition: "1.5s ease",
                    opacity: opacity,
                    position: position,
                    cursor: opacity == 0 ? "auto" : "pointer"
                }}
                onClick={
                    opacity == 1 ? () => addCart({ id, price }) : null
                }
                type="button"
            >
                {
                    typeof (discount) == "number" && gamePage != true ?
                        <span className={styles.discount}> -{discount}% </span> : null
                }
                {
                    typeof (price) == "number" && gamePage != true ?
                        <>
                            <span className={styles.price}>
                                {
                                    !noCart ?
                                        typeof (discount) == "number" ?
                                            `R$ ${convertPrice(newPrice)}`
                                            : typeof (discount) != "number" && price != 0 ?
                                                `R$ ${convertPrice(price)}`
                                                : "Gratuito"
                                        : "No Carrinho"
                                }
                            </span>
                            <i class={`${icone}`} style={{ color: noCart ? "red" : "white", display: isCarrossel ? "none" : "" }}></i>
                        </>
                        : typeof (price) == "number" || "object" && gamePage == true ?
                            <>
                                <span className={styles.price}>
                                    {noCart ? "No Carrinho" : "Adicionar ao Carrinho"}
                                </span>
                                <i class={`${icone}`} style={{ color: noCart ? "red" : "white" }}></i>
                            </>
                            : typeof (price) === "string" ?
                                <Link to={`/jogo/${id}`}>
                                    <span style={{ padding: "5px" }}>Anunciado</span>
                                </Link> : null
                }
            </button>
        </>
    );
}

export default CartButton;