interface AuthContextData {
  isAuthenticated: boolean
  login: (newToken: string) => void
  logout: () => void
}
