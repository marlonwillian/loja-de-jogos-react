import styles from "./Nintendo.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import jogos from "../../json/games.json";
import Category from "../../components/Category";
import Card from "../../components/Card";
import NintendoIcon from "../../components/NintendoIcon";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import GiftCards from "../../components/GiftCards";
import CarrosselCategory from "../../components/CarrosselCategory";

const categories = [
    "As franquias mais amadas",
    "Ultimos lançamentos"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Nintendo() {
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(0), 1000)
    }, []);

    return (
        <section className="styles.section">
            <title>Nintendo</title>
            <Loading opacity={loading}/>
            <Header 
                console={<NintendoIcon marginBottom="0"/>} 
                color="#e60012" 
                shadow="#000000fe 5px 3px 8px"
                colorScrolled="#e60012"
            />
            <Banner
                img="https://i.pinimg.com/originals/9d/72/de/9d72deccef3bae5c0c30b6b9031a5e68.jpg"
                isNintendo={true}
            >
                <h1 className={styles.title}>
                    <i><NintendoIcon marginBottom="2"/></i>
                    <span>Nintendo</span>
                </h1>
            </Banner>
            <Container background="#b6121b" bordertop="0.5px solid #ffffff5a">
                {categories.map((category, index) =>
                    <Category 
                        title={category} 
                        category={category} 
                        index={index} 
                        key={index} 
                    >
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
                                        color="#690a0f"
                                        img={jogo.cover}
                                        key={jogo.id}
                                    />)
                            }
                        </CarrosselCategory>
                    </Category>
                )}
            </Container>
            <GiftCards plataform="Nintendo" firstColor="b6121b" secondColor="e60012"/>
            <Footer color="#e60012" />
        </section>
    )
}

export default Nintendo;