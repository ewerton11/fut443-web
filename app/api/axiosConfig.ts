import axios, { AxiosInstance } from 'axios'
import publicRoutes from './publicRoutes'

const baseURL = 'https://localhost:7276/api'

const apiService: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiService.interceptors.request.use(
  (config) => {
    const requiresAuth = publicRoutes.some((route) =>
      config.url?.includes(route)
    )

    const token = localStorage.getItem('token')

    if (!requiresAuth && token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiService.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/pages/login'
    }
    return Promise.reject(error)
  }
)

export default apiService
