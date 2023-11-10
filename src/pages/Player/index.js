import { useParams } from "react-router-dom"
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import styles from "./Player.module.css"
import NotFound from "../NotFound"
import { useEffect, useState } from "react"

function Player() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/yapeansa/cinetag-api/videos")
        .then(resposta => resposta.json())
        .then(dados => setVideos(dados))
    }, [])

    const parametros = useParams()
    const video = videos.filter(video => video.id === Number(parametros.id))

    if (!video[0]) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    src={video[0].link}
                    title={video[0].titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
            </section>
        </>
    )
}

export default Player
