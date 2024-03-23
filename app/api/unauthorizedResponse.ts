import { AxiosError } from 'axios'

const handleUnauthorizedResponse = async (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    window.location.href = '/pages/login'
  }
  return Promise.reject(error)
}

export default handleUnauthorizedResponse
