import { useKeycloak } from '@react-keycloak/web'
import { httpClient } from '../utils/http-client.util'
import { AxiosError, AxiosInstance } from 'axios'
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

  httpClient.interceptors.response.use(
    (value) => value,
    (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        keycloak.login()
      }
    }
  )

  return (
    <HttpClientContext.Provider value={httpClient}>
      {children}
    </HttpClientContext.Provider>
  )
}
