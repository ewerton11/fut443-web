import { AxiosResponse } from 'axios'
import apiService from './axiosConfig'

export const getAllPlayersByChampionshipData = async (
  id: string
): Promise<any> => {
  try {
    const response = await apiService.get(`/championship/championship/${id}`)
    return response.data
  } catch (error: any) {
    throw new Error(
      'An error occurred while fetching championship data:' + error
    )
  }
}

export const getAllChampionshipInProgress = async (): Promise<
  ChampionshipInProgessData[]
> => {
  try {
    const response: AxiosResponse<ChampionshipInProgessData[]> =
      await apiService.get('/championship/inProgress')
    return response.data
  } catch (error: any) {
    throw new Error(
      'An error occurred while fetching championship data:' + error
    )
  }
}
