import styles from "./Playstation.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import jogos from "../../json/games.json";
import Category from "../../components/Category";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import GiftCards from "../../components/GiftCards";
import CarrosselCategory from "../../components/CarrosselCategory";

const categories = [
    "Ultimos lançamentos e anunciados",
    "O melhor do PlayStation Studios",
    "PS Plus",
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Playstation() {
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(0), 1000)
    }, []);

    return (
        <section className="styles.section">
            <title>PlayStation</title>
            <Loading opacity={loading}/>
            <Header console={<i class="fa-brands fa-playstation"></i>} color="#08459a" colorScrolled="#08459a" shadow="#000000fe 5px 3px 8px"/>
            <Banner 
                img="https://preview.redd.it/the-new-playstation-studios-banner-who-can-spot-dreams-v0-nsy12gkrmdt81.jpg?auto=webp&s=66d3a29499ae8e4659ce4e0d0b34c7b69bed1d5a"
                isPlaystation={true}
            >
                <h1 className={styles.title}>
                    <span class="fa-brands fa-playstation"></span> PlayStation
                </h1>
            </Banner>
            <Container background="#08264f">
                { categories.map((category, index) =>
                    <Category title={category} category={category} key={index} index={index}>
                        <CarrosselCategory>
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
                                        color="#061a36"
                                        img={jogo.cover}
                                        key={jogo.id}
                                    />)
                            }
                        </CarrosselCategory>
                    </Category>
                )}
            </Container>
            <GiftCards plataform="PlayStation" firstColor="08264f" secondColor="025ca5c2"/>
            <Footer color="#08459a"/>
        </section>
    )
}

export default Playstation;