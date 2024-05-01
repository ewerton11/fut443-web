import { AxiosResponse } from 'axios'
import apiService from './axiosConfig'

export const addPlayerToTeamData = async (
  id: string,
  playerIds: string[]
): Promise<PlayersData[]> => {
  try {
    const response: AxiosResponse<PlayersData[]> = await apiService.post(
      `/team/temporary/create/${id}`,
      playerIds
    )
    return response.data
  } catch (error: any) {
    throw new Error(
      'An error occurred while fetching championship data:' + error
    )
  }
}
