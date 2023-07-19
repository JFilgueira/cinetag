import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.logo}>
                <p>Cine<span>Tag</span></p>
            </Link>
            <div>
                <nav>
                    <ul className={styles.header_actions}>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? styles.homeActive : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.favBtn}>
                            <NavLink
                                to='/favorites'
                                className={({ isActive }) => (isActive ? styles.active : '')}
                            >
                                Favoritos
                            </NavLink>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header