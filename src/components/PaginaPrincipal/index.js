import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"

function PaginaPrincipal() {
    return (
        <main>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaPrincipal
