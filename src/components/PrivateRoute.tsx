import { useKeycloak } from '@react-keycloak/web'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  element: JSX.Element
}
export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { keycloak } = useKeycloak()

  return keycloak.authenticated ? element : <Navigate to={'/login'} />
}
