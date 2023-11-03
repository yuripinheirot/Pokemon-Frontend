import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './utils/keycloack.util'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <App />
  </ReactKeycloakProvider>
)
