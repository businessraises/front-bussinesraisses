import { Navigate, useLocation } from 'react-router'
import useAuth from '../static/js/useAuth'

const ProtectedRoute = ({ component: Component }) => {
  const auth = useAuth()
  const location = useLocation()

  return auth ? <Component /> : <Navigate to='/login' state={{ location }} />
}

export default ProtectedRoute
