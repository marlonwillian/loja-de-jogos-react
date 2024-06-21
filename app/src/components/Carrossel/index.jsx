import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Banner from "../Banner";
import styles from "./Carrossel.module.css";
import jogos from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import CartButton from "../CartButton";
import { Link } from "react-router-dom";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function convertPrice(price) {
    price = price.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    return price
}

const number = [getRandomInt(0, 69), getRandomInt(0, 69), getRandomInt(0, 69), getRandomInt(0, 69)];

function Carrossel() {
    return (
        <div className={styles.div}>
            <Carousel>
                <Carousel.Item interval={6500} color="black">
                    <Link 
                        className={styles.link} 
                        to={`/jogo/${jogos[number[0]].id}`}
                    >
                        <Banner
                            isCarrossel={true}
                            img={jogos[number[0]].cover}
                        >
                            <div className={styles.gameinfo}>
                                <div className={styles.gameinfo2}>
                                    <CartButton
                                        id={jogos[number[0]].id}
                                        price={typeof (jogos[number[0]].preco) == "object" ?
                                            jogos[number[0]].preco[0] : jogos[number[0]].preco
                                        }
                                        discount={jogos[number[0]].discount}
                                        isCarrossel={true}
                                    />
                                    <div className={styles.plataforms}>
                                        <FilterPlataform
                                            id={jogos[number[0]].id}
                                            fontsize="8px"
                                            onlylogo="true"
                                            nintendosize="20px"
                                            steamsize="20px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                {/* <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[1]].id}`}>
                        <Banner
                            isCarrossel={true}
                            img={jogos[number[1]].cover}
                        >
                            <div className={styles.gameinfo}>
                            <CartButton
                                id={jogos[number[1]].id}
                                price={typeof (jogos[number[1]].preco) == "object" ?
                                    jogos[number[1]].preco[0] : jogos[number[1]].preco
                                }
                                discount={jogos[number[1]].discount}
                                isCarrossel={true}
                            />
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[1]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[2]].id}`}>
                        <Banner
                            isCarrossel={true}
                            img={jogos[number[2]].cover}
                        >
                            <div className={styles.gameinfo}>
                            <CartButton
                                id={jogos[number[2]].id}
                                price={typeof (jogos[number[2]].preco) == "object" ?
                                    jogos[number[2]].preco[0] : jogos[number[2]].preco
                                }
                                discount={jogos[number[2]].discount}
                                isCarrossel={true}
                            />
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[2]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[3]].id}`}>
                        <Banner
                            isCarrossel={true}
                            img={jogos[number[3]].cover}
                        >
                            <div className={styles.gameinfo}>   
                                <CartButton
                                    id={jogos[number[3]].id}
                                    price={typeof (jogos[number[3]].preco) == "object" ?
                                        jogos[number[3]].preco[0] : jogos[number[3]].preco
                                    }
                                    discount={jogos[number[3]].discount}
                                    isCarrossel={true}
                                />
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[3]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

export default Carrossel;