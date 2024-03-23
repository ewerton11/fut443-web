import { InternalAxiosRequestConfig } from 'axios'

const addAuthorizationHeader = async (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

export default addAuthorizationHeader
