export const checkAuthentication = (): boolean => {
  const token: string | null = localStorage.getItem('token')
  // Verifique se o token está presente e válido aqui
  //return !!token
  if (!token) {
    return false // Se não houver token, o usuário não está autenticado
  }

  return false
}
