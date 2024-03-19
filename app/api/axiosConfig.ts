import axios, { AxiosInstance } from 'axios'

const baseURL = 'https://localhost:7276/api'

const apiService: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiService.interceptors.request.use(
  (config) => {
    // Verifica se a rota requer autorização (token)
    const requiresAuth =
      !config.url?.includes('/login') && !config.url?.includes('/create')

    const token = localStorage.getItem('token')

    if (requiresAuth && token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiService
