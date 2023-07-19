import Banner from 'components/Banner'
import CardContainer from 'components/CardContainer'
import { useFavoriteContext } from 'contexts/FavoritesContext'
import React from 'react'
import styles from './Favorites.module.css'
import Card from 'components/Card'

const Favorites = () => {
  const {favorite} = useFavoriteContext();

  return (
    <>
      <Banner
        img='favoritos'
        title='Seus filmes favoritos'
        subtitle='Um lugar para guardar seus filmes favoritos.'
      />
      <section className={styles.cardContainer}>
            <div className={styles.sectionTitle}>
                <h1>Seus Favoritos</h1>
                <div className={styles.border}></div>
            </div>
            <div className={styles.cards}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </div>
        </section>
    </>
  )
}

export default Favorites