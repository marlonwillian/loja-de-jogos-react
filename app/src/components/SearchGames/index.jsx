import GameList from "../GameList/index.jsx";

function SearchGames({ jogos, text }) {
    function removeAccent(text){       
        text = text.replace(/'/g, '')
        text = text.replace(/-/g, ' ')
        return text               
    }

    function filterGames(jogos, searchText) {
        return jogos.filter((jogo) => 
            jogo.title.includes(searchText) || 
            removeAccent(jogo.title).includes(searchText) || 
            removeAccent(jogo.title.toLowerCase()).includes(searchText) || 
            removeAccent(jogo.title.toUpperCase()).includes(searchText)) // || jogo.developer.includes(searchText))
    }

    const foundGames = filterGames(jogos, text)

    return (
        <GameList jogos={foundGames}/>
    );
}

export default SearchGames;