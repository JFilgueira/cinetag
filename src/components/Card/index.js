import React from 'react'
import styles from './Card.module.css'
import { useFavoriteContext } from 'contexts/FavoritesContext'
import { Link } from 'react-router-dom';

const Card = ({id, title, cover}) => {
    const {favorite, addFavorite} = useFavoriteContext();
    const isFav = favorite.some((fav) => fav.id === id);
    const icon = !isFav ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>; 

    return (
        <div className={styles.card}>
            <Link to={`/${id}`}>
                <div>
                    <img src={cover} alt="poster" className={styles.cardBanner}/>
                </div>
            </Link>
            <div className={styles.cardActionsContainer}>
                <div 
                    className={styles.cardActions}
                    onClick={() => {
                        addFavorite({id, title, cover})
                    }}
                >
                    {icon}
                    {/* {<i class="fa-solid fa-heart"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Card