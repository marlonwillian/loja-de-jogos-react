import styles from "./Xbox.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import jogos from "../../json/games.json";
import Category from "../../components/Category";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import GiftCards from "../../components/GiftCards";
import CarrosselCategory from "../../components/CarrosselCategory";

const categories = [
    "O melhor da Xbox Game Studios",
    "Jogos em lançamentos e anunciados",
    "Game Pass"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Xbox() {
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(0), 1000)
    }, []);

    return (
        <section className="styles.section">
            <title>Xbox</title>
            <Loading opacity={loading}/>
            <Header console={<i class="fa-brands fa-xbox"></i>} colorScrolled="green"/>
            <Banner
                img="https://pixelz.cc/wp-content/uploads/2023/09/halo-infinite-master-chief-uhd-4k-wallpaper.jpg"
                isXbox={true}
            >
                <div className={styles.plataformDiv}>
                    <h1 className={styles.title}><span class="fa-brands fa-xbox"></span> XBOX</h1>
                </div>
            </Banner>
            <Container background="#016001">
                {categories.map((category, index) =>
                    <Category title={category} category={category} index={index} key={index}>
                        <CarrosselCategory>
                            {
                                filterCategory(index).map(jogo =>
                                    <Card
                                        title={jogo.title}
                                        id={jogo.id}
                                        price={
                                            typeof (jogo.preco) == "object"
                                                ? jogo.preco[0] : jogo.preco
                                        }
                                        discount={jogo.discount}
                                        color="black"
                                        img={jogo.cover}
                                        key={jogo.id}
                                    />)
                            }
                        </CarrosselCategory>
                    </Category>
                )}
            </Container>
            <GiftCards plataform="Xbox" firstColor="016001" secondColor="016001"/>
            <Footer color="green" />
        </section>
    )
}

export default Xbox;