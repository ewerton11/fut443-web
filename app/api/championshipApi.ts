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
