import axios, { AxiosResponse } from 'axios'
import { IUserData } from '../types/userData'

const baseURL = 'https://localhost:7276/api'

const apiService = axios.create({
  baseURL,
})

export const createUser = async (userData: IUserData): Promise<IUserData> => {
  try {
    const response: AxiosResponse<IUserData> = await apiService.post(
      '/user/create',
      userData
    )
    return response.data
  } catch (error: any) {
    throw new Error('An error occurred while creating the user:', error)
  }
}
