import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Banner from 'components/Banner'
import Card from 'components/Card'

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/jfilgueira/cinetag-api/movies')
    .then(response => response.json())
    .then(data => {
      setMovies(data);
    })
  }, [])

  return (
    <>
      <Banner
        img='player'
        title='Viva a magia do cinema!'
        subtitle='Conheça mais sobre os maiores filmes da história do cinema e favorite os seus preferidos.'
      />
      <section className={styles.cardContainer}>
        <div className={styles.sectionTitle}>
          <h1>Grandes Clássicos do cinema:</h1>
          <div className={styles.border}></div>
        </div>
        <div className={styles.cards}>
          {movies.map((movie) => {
            return <Card {...movie} key={movie.id}/>
          })}
        </div>
      </section>
    </>
  )
}

export default Home