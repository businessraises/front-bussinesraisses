import './app.css'

import { UserProvider } from './context/StaticContext'
import Routes from './routers/Routes'

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App
