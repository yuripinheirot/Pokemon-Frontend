import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MainContainer } from './containers/Main'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainContainer />}
      />
    </Routes>
  )
}
