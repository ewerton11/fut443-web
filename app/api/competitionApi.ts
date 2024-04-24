import apiService from './axiosConfig'
import { AxiosResponse } from 'axios'
import { ICreateCompetitionData } from '../types/createCompetitionData'

export const CreateCompetition = async (
  createCompetitionData: ICreateCompetitionData
): Promise<ICreateCompetitionData> => {
  try {
    const response: AxiosResponse<ICreateCompetitionData> =
      await apiService.post('/competitions', createCompetitionData)
    return response.data
  } catch (error: any) {
    throw new Error('An error occurred while creating the competition:' + error)
  }
}

export const getCompetitionData = async (): Promise<any> => {
  try {
    //const response = await apiService.get(`/competition/read?id=${id}`)
    //return response.data
  } catch (error: any) {
    throw new Error(
      'An error occurred while fetching competition data:' + error
    )
  }
}

export const getAllCompetitionData = async (): Promise<CompetitionData[]> => {
  try {
    const response = await apiService.get('/competitions')
    return response.data as CompetitionData[]
  } catch (error: any) {
    throw new Error(
      'An error occurred while fetching competition data:' + error
    )
  }
}
