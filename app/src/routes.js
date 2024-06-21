import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playstation from "./pages/Playstation";
import Nintendo from "./pages/Nintendo";
import Xbox from "./pages/Xbox";
import Game from "./pages/Game";
import CartProvider from "./context/Cart";
import PC from "./pages/PC";
import RedirectPage from "./pages/RedirectPage";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/jogo/:id" element={ <Game/> }></Route>
                    <Route path="/redirect/:id" element={ <RedirectPage/> }></Route>
                    <Route path="/playstation" element={ <Playstation/> }></Route>
                    <Route path="/nintendo" element={ <Nintendo/> }></Route>
                    <Route path="/xbox" element={ <Xbox/> }></Route>
                    <Route path="/pc" element={ <PC/> }></Route>
                    <Route path="*" element={ <PageNotFound/> }></Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;
