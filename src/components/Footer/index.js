import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div className={styles.footerInfo}>
                <p>&copy; 2023 <a href="https://github.com/jfilgueira" target="_blank" rel="noopener noreferrer">JoaoFilgueira</a>. Todos os direitos reservados.</p>
                <nav>
                    <ul className={styles.footerNav}>
                        <li>
                            <a href="#">Privacidade</a>
                        </li>
                        <li>
                        <a href="#">Termos</a>
                        </li>
                        <li>
                        <a href="#">Ajuda</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer