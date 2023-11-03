import { useKeycloak } from '@react-keycloak/web'

type PrivateRouteProps = {
  element: JSX.Element
}
export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { keycloak } = useKeycloak()

  if (!keycloak.authenticated) {
    keycloak.login()
  }

  return element
}
