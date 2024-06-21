import styles from "./Form.module.css";
import jogo from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';
import CartButton, { convertPrice } from "../CartButton";
import { useCartContext } from "../../context/Cart";

function Form({ id }) {
    const opcoes = jogo[id].preco;

    const { inCart, addCart } = useCartContext();
    const noCart = inCart.some((cart) => cart.id === id);
    let checkPrice = inCart.filter((cart) => cart.id === id).map((cart) => cart.price);
    let price = checkPrice.filter((cart) => cart.price === opcoes[0] || opcoes[1])

    let [valorSelecionado, setValorSelecionado] = useState(
        price.length > 0 ? price[0]: 0
    );

    const change = (event) => {
        setValorSelecionado(event.target.value);
    };

    let desconto = jogo[id].discount/100
    typeof(opcoes) == "number" ? desconto = desconto * jogo[id].preco : desconto = desconto
    let newPrice = jogo[id].preco - desconto

    return (
        <div className={styles.description} >
            <h2>{jogo[parseInt(id)].title}</h2>
            <h5>{jogo[parseInt(id)].developer}</h5>
            <form className={typeof (opcoes) == "object" ? styles.edition : styles.price}>
                <FilterPlataform id={id} fontsize="13px" />
                <hr />
                <div style={{
                    height: 
                        valorSelecionado == '' && typeof (opcoes) != "number" ? "230px"
                        : valorSelecionado != '' && typeof (opcoes) != "number" ? "315px"
                        : typeof (opcoes) == "number" ? "175px" : null, 
                    transition: "0.5s ease"
                }}>
                    {
                        typeof (opcoes) == "object" ?
                            opcoes.map((opcao, index) => (
                                <label key={opcao} checked>
                                    <input
                                        type="radio"
                                        value={opcao}
                                        checked={valorSelecionado == opcao}
                                        onClick={change}
                                    />
                                    <span
                                        className={
                                            valorSelecionado == opcao ? styles.selected : null
                                        }
                                        style={{ padding: "5px" }}
                                    >
                                        R$ {typeof(jogo[id].discount) != "number" ? convertPrice(opcao) : convertPrice(opcao - (opcao * desconto))} | {index === 0 ? "Edição Padrão" : "Edição Deluxe"}
                                    </span>
                                    {
                                        typeof(jogo[id].discount) == "number" ?
                                            <>
                                                <span
                                                    className={index === 0 ? styles.prevPrice1 : styles.prevPrice2}
                                                >
                                                    <i style={{textDecoration: "line-through"}}>
                                                        R$ {convertPrice(opcao)}
                                                    </i>
                                                </span>
                                                <span className={styles.discount1}>
                                                    -{jogo[id].discount}%
                                                </span>
                                            </>
                                        : null
                                    }
                                </label>
                            )) 
                        : typeof (opcoes) == "number" ?
                            <div>
                                <span className={styles.value}>
                                    <span 
                                        className={styles.discount} 
                                        style={{
                                            display: 
                                                typeof(jogo[id].discount) == "number" ? "block" : "none"
                                        }}>
                                        - {jogo[id].discount}%
                                    </span>
                                    R$ {typeof(jogo[id].discount) != "number" ? convertPrice(jogo[id].preco) : convertPrice(newPrice)}
                                </span>
                            </div>
                        : <span 
                            className={styles.value} 
                            style={{
                                marginTop: "65px",
                                paddingInline: "50px"
                            }}>
                            {jogo[id].info[3]}
                        </span>
                    }
                    <hr style={{ display: typeof (opcoes) == "object" ? "block" : "none" }} />
                    <section style={{ alignItems: "flex-end" }}>
                        {
                            typeof (opcoes) != "string" ?
                                <CartButton
                                    id={id}
                                    price={typeof(opcoes) == "number" ? 
                                        opcoes : parseFloat(valorSelecionado)
                                    }
                                    gamePage={true}
                                    opacity={
                                        valorSelecionado == '' && typeof (opcoes) == "object" ? "0" : "1"
                                    }
                                />
                            : ""
                        }
                    </section>
                </div>
                <hr />
            </form>
        </div>
    );
}

export default Form;