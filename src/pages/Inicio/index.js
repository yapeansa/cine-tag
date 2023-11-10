import { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Titulo from "../../components/Titulo"
import styles from "./Inicio.module.css"

function Inicio() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/yapeansa/cinetag-api/videos")
            .then(resposta => resposta.json())
            .then(dados => setVideos(dados))
    }, [videos])

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}

export default Inicio
