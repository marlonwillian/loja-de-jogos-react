import styles from "./Banner.module.css";

function Banner({ children, img, height, bgposition, bgcolor, margintop, paddingtop, borderradius, textalign, isHome, isCarrossel, isGamePage,
isPlaystation, isNintendo, isXbox}) {
    return (
        <section 
            className={
                `${styles.banner} 
                ${
                      isHome ? styles.bannerHome 
                    : isCarrossel ? styles.bannerCarrossel
                    : isGamePage ? styles.bannerGamePage
                    : isPlaystation ? styles.bannerPlaystation
                    : isNintendo ? styles.bannerNintendo
                    : isXbox ? styles.bannerXbox
                    : "" 
                }`
            }
            style={{
                backgroundImage: `url('${ img }')`, 
                height: height, 
                backgroundPosition: bgposition, 
                backgroundColor: bgcolor, 
                marginTop: margintop,
                paddingTop: paddingtop,
                borderRadius: borderradius,
                textAlign: textalign
            }}
        >  
            { children }
        </section>
    );  
}

export default Banner;