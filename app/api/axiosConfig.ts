import axios, { AxiosError, AxiosInstance } from 'axios'
import publicRoutes from './publicRoutes'
import handleUnauthorizedResponse from './unauthorizedResponse'
import addAuthorizationHeader from './authorizationHeader'

const baseURL = 'https://localhost:7276/api'

const apiService: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiService.interceptors.request.use(
  async (config) => {
    const requiresAuth = publicRoutes.some((route) =>
      config.url?.includes(route)
    )

    if (!requiresAuth) {
      await addAuthorizationHeader(config)
    }

    return config
  },
  async (error: AxiosError) => {
    return Promise.reject(error)
  }
)

apiService.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    return await handleUnauthorizedResponse(error)
  }
)

export default apiService
