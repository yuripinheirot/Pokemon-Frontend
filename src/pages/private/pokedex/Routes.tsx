import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PokedexContainer from './containers/Pokedex'
import { PrivateRoute } from '../../../components/PrivateRoute'

export const PokedexRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<PrivateRoute element={<PokedexContainer />} />}
      />
    </Routes>
  )
}
