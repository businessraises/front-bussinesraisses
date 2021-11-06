import Cookies from 'universal-cookie/es6'

export default function useAuth () {
  const cookies = new Cookies()
  const accessToken = cookies.get('accessToken')

  return accessToken;
}