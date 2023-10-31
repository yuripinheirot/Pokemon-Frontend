import { Route, Routes } from 'react-router-dom'

import { MainContainer } from './containers/Main'
import { PokedexRoutes } from '../../private/pokedex/Routes'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainContainer />}
      />
      <Route
        path='/pokedex'
        element={<PokedexRoutes />}
      />
    </Routes>
  )
}
