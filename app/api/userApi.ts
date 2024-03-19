import apiService from './axiosConfig'
import { AxiosResponse } from 'axios'
import { ICreateUserData } from '../types/createUserData'
import { ILoginUserData } from '../types/loginUserData'

export const createUser = async (
  createUserData: ICreateUserData
): Promise<ICreateUserData> => {
  try {
    const response: AxiosResponse<ICreateUserData> = await apiService.post(
      '/user/create',
      createUserData
    )
    return response.data
  } catch (error: any) {
    throw new Error('An error occurred while creating the user:' + error)
  }
}

export const loginUser = async (
  loginUserData: ILoginUserData
): Promise<ILoginUserData> => {
  try {
    const response: AxiosResponse<ILoginUserData> = await apiService.post(
      '/AuthUser/login',
      loginUserData
    )
    return response.data
  } catch (error: any) {
    throw new Error('An error occurred while creating the user:' + error)
  }
}

export const getUserData = async (): Promise<any> => {
  try {
    const response = await apiService.get('/user/read-user-and-team')
    return response.data
  } catch (error: any) {
    throw new Error('An error occurred while fetching user data:' + error)
  }
}
