import { Link } from "react-router-dom"
import logo from "./logo.png"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "../CabecalhoLink"

function Cabecalho() {

    const navegacao = [
        {
            nome: "Home",
            caminho: "./"
        },
        {
            nome: "Favoritos",
            caminho: "./favoritos"
        }
    ]

    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag" />
            </Link>
            <nav>
                {navegacao.map(link =>
                    <CabecalhoLink url={link.caminho}>
                        {link.nome}
                    </CabecalhoLink>)
                }
            </nav>
        </header>
    )
}

export default Cabecalho
