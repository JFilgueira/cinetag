import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Info.module.css'

const Info = () => {

    const [movie, setMovie] = useState([]);
    const parameters = useParams();
    console.log(parameters.id);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/jfilgueira/cinetag-api/movies?id=${parameters.id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(...data);
            })
    }, [])
    console.log(movie);
    return (
        <section className={styles.info}>
            <div className={styles.infoSection}>
                <img src={movie.cover} alt={movie.title} className={styles.infoCover} />
                <h2>Sinopse:</h2>
                <p>{movie.description}</p>
            </div>

            <div className={styles.infoActions}>
                <h1>{movie.title}</h1>
                <iframe
                    width="90%"
                    height="50%"
                    src={movie.link}
                    title={movie.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    )
}

export default Info