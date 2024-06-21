import styles from "./Footer.module.css";

function Footer({ color }) {
    return (
        <footer
            className={styles.footer}
            style={{ backgroundColor: color }}
        >
            <span className={styles.upDescription}>Rua Cássio Ramos, n° 1910 <br/> São Paulo, SP</span>
            <hr style={{ paddingInline: "15px" }} />
            <span className={styles.downDescription}> 
                <span>
                    <i class="fa-solid fa-earth-americas"></i> 
                    PT-BR
                </span>
                <span>
                    <i class="fa-solid fa-lock"></i> 
                    Loja Segura | Loja "Oficial"
                    <i class="fa-solid fa-check"></i>
                </span>
                <span>
                    <a href="https://github.com/marlonwillian" target="blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/mwbrrs/" target="blank"><i class="fa-brands fa-instagram"></i></a>
                    <i class="fa-brands fa-facebook"></i>
                </span>
            </span>
        </footer>
    );
}

export default Footer;
