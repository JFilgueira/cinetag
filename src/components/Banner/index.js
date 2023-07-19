import React from 'react'
import styles from './Banner.module.css'

const Banner = ({ img, title, subtitle }) => {
    return (
        <section
            style={{ backgroundImage: `url('/img/banner-${img}.png')` }}
            className={styles.banner}
        >
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    )
}

export default Banner