import { Routes, Route } from 'react-router-dom'
import { PokedexRoutes } from './private/pokedex/Routes'
import { MainRoutes } from './public/main/Routes'

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route
        path='/*'
        element={<MainRoutes />}
      />
      <Route
        path='/pokedex'
        element={<PokedexRoutes />}
      />
    </Routes>
  )
}
