import { httpClient } from '../utils/http-client.util'
import { AxiosInstance } from 'axios'
import { createContext } from 'react'

const HttpClientProvider = createContext<AxiosInstance>(httpClient)

export default HttpClientProvider
