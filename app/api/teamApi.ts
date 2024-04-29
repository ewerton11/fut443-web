import apiService from './axiosConfig'

export const addPlayerToTeamData = async (
  id: string,
  playerIds: string[]
): Promise<any> => {
  try {
    const response = await apiService.post(
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
