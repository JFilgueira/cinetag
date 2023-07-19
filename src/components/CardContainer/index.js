import React from 'react'
import styles from './CardContainer.module.css'
import Card from 'components/Card'

const CardContainer = ({ children, favorite }) => {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.sectionTitle}>
                <h1>{children}</h1>
                <div className={styles.border}></div>
            </div>
            <div className={styles.cards}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </div>
        </section>
    )
}

export default CardContainer