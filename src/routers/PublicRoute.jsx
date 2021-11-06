import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../static/js/useAuth'

const PublicRoute = ({ component: Component }) => {
  const auth = useAuth()
  const location = useLocation()

  return !auth ? <Component /> : <Navigate to='/' state={{ location }} />
}

export default PublicRoute
