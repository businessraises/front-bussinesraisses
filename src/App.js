import { Suspense } from 'react'
import './app.css'

import { UserProvider } from './context/UserContext'
import Routes from './routers/Routes'

const App = () => {
  return (
    <Suspense fallback={<h1>Loading data...</h1>}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </Suspense>
  )
}

export default App
