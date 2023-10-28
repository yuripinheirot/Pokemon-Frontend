import axios from 'axios'

const host = String(process.env.REACT_APP_API_PROXY_HOST)
const port = String(process.env.REACT_APP_API_PROXY_PORT)

export const httpClient = axios.create({
  baseURL: `http://${host}:${port}`,
})
