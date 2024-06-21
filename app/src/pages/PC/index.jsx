import styles from "./PC.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogos from "../../json/games.json";
import Category from "../../components/Category";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const categories = [
    "Destaques no PC",
    "Epic Games",
    
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function convertPrice(price) {
    price = price.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return price
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

const number = getRandomInt(0, 69);

function PC() {
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(0), 1000)
    }, []);

    return (
        <>
            <title>PC</title>
            <Loading opacity={loading} height="105%" margintop="-70px"/>
            <section>
                <Header console="Consoles" color="#100f0f" shadow="0 2px 5px #000000dc"/>
                <Container background="#00000096" marginTop="70px">
                    {categories.map((category, index) =>
                        <Category
                            title={category}
                            category={category}
                            index={index}
                            key={index}
                        >
                            {
                                filterCategory(index).map(jogo =>
                                    <Card
                                        title={jogo.title}
                                        id={jogo.id}
                                        price={
                                            typeof(jogo.preco) == "object"
                                            ? jogo.preco[0] : jogo.preco
                                        }
                                        discount={jogo.discount}
                                        img={jogo.cover}
                                        key={jogo.id}
                                    />
                                )
                            }
                        </Category>
                    )}
                </Container>
                <Footer color="#100f0f"/>
            </section>
        </>
    );
}

export default PC;