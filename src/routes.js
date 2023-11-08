import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import Container from "./components/Container"
import PaginaPrincipal from "./components/PaginaPrincipal"
import FavoritosProvider from "./contextos/Favoritos"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<PaginaPrincipal />}>
                            <Route index element={<Inicio />} />
                            <Route path="favoritos" element={<Favoritos />} />
                        </Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoutes
