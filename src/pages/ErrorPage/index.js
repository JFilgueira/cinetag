import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className={styles.errorPage}>
        <h1>Ops!</h1>
        <p>Parece que essa página não existe.</p>
        <Link to='/'>Página principal</Link>
    </section>
  )
}

export default ErrorPage