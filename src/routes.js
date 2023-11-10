import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import PaginaPrincipal from "./components/PaginaPrincipal"
import Player from "./pages/Player"
import NotFound from "./pages/NotFound"

function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaPrincipal />}>
                            <Route index element={<Inicio />} />
                            <Route path="favoritos" element={<Favoritos />} />
                            <Route path="videos/:id" element={<Player />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
