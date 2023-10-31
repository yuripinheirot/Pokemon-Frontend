import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import PokedexContainer from './containers/Pokedex'

export const PokedexRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<PokedexContainer />}
      />
    </Routes>
  )
}
