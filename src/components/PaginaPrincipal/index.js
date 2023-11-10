import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"
import Container from "../Container"
import FavoritosProvider from "../../contextos/Favoritos"

function PaginaPrincipal() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaPrincipal
