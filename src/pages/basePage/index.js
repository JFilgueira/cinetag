import Footer from 'components/Footer'
import Header from 'components/Header'
import FavoritesProvider from 'contexts/FavoritesContext'
import React from 'react'
import { Outlet } from 'react-router-dom'

const BasePage = () => {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Outlet/>
            </FavoritesProvider>
            <Footer/>
        </main>
    )
}

export default BasePage