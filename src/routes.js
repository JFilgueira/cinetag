import ErrorPage from 'pages/ErrorPage'
import Favorites from 'pages/Favorites'
import Home from 'pages/Home'
import Info from 'pages/Info'
import BasePage from 'pages/basePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path=':id' element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes