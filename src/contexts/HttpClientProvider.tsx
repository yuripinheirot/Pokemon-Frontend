import { useKeycloak } from '@react-keycloak/web'
import { httpClient } from '../utils/http-client.util'
import { AxiosInstance } from 'axios'
import { ReactNode, createContext } from 'react'

export const HttpClientContext = createContext<AxiosInstance>(httpClient)

type Props = {
  children: ReactNode
}
export const HttpClientProvider = ({ children }: Props) => {
  const { keycloak } = useKeycloak()

  httpClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${keycloak.token}`

  return (
    <HttpClientContext.Provider value={httpClient}>
      {children}
    </HttpClientContext.Provider>
  )
}
