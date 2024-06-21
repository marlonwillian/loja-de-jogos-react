import styles from "./FilterPlataform.module.css";
import jogo from "../../json/games.json";
import NintendoIcon from "../../components/NintendoIcon";

function FilterPlataform( {id, onlylogo, fontsize, nintendosize, steamsize}) {
    const consoles = [
        'PS5', 'PS4', 'Xbox Series', 'Xbox One', 'Nintendo Switch', 'PC'
    ];
    
    function filterPlataform(index) {
        return jogo[id].console.filter(jogo => jogo.console === consoles[index])
    }

    return (
        filterPlataform().map(plataform => plataform == "PS5" ?
        <span
            className={styles.plataform}
            style={{
                fontSize: fontsize, fontFamily: "psfont", color: "black", 
                backgroundColor: "white", borderRadius: "5px", marginTop: "10px"
            }}>
                <span>{plataform}</span>
        </span>
        : plataform == "PS4" ?
        <span
            className={styles.plataform}
            style={{
                fontSize: fontsize, fontFamily: "psfont", color: "white", 
                backgroundColor: "black", boxShadow: "0px 0px 2px white", borderRadius: "5px", marginTop: "10px"
            }}>
                <span>{plataform}</span>
        </span>
        : plataform == "XBOX X|S" ?
        <span
            className={styles.plataform}
            style={{
                fontSize: fontsize, fontFamily: "xboxfont", color: "white", 
                backgroundColor: "green", borderRadius: "2px", marginTop: "10px"
            }}>
                <span><i class="fa-brands fa-xbox"></i> {"X|S"}</span>
        </span> : plataform == "XBOX" ?
        <span
            className={styles.plataform}
            style={{
                fontSize: fontsize, fontFamily: "xboxfont", color: "white", 
                backgroundColor: "green", borderRadius: "2px", marginTop: "10px"
            }}>
                <span>
                    <i class="fa-brands fa-xbox"></i> {"ONE"} 
                    <span 
                        style={{
                            fontSize: fontsize, fontFamily: "arial", fontWeight: "500", marginLeft: "3px"
                        }}>
                    </span>
                </span>
        </span> : plataform == "Nintendo" ?
        onlylogo ? <i style={{marginBottom: "4px", marginRight: "5px", paddingTop: "0px", fontSize: nintendosize, color: "red"}}><NintendoIcon marginBottom="0"/></i>:
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "nintendofont", fontWeight: "100", color: "white", backgroundColor: "red", padding: "6px"}}>
                <span className={styles.nintendo}> {plataform}</span>
        </span> : plataform == "STEAM" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "steamfont", color: "white", backgroundColor: "#132239", border: "0.1px solid white"}}>
                <span>PC</span>
        </span> : <span></span>)
    );
}

export default FilterPlataform;