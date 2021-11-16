import React from 'react'
/* ---- */
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
/* ---- */
import MainPage from '../pages/MainPage'
/* Pages */
import Login from '../pages/Login/LoginPage'
import Register from '../pages/Register/RegisterPage'
import Recover from '../pages/Recover/Recover'
/* Components */
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home/HomePage'
import AcercaPage from '../pages/About/AcercaPage'
import Configuration from '../pages/Configuration/Configuration'
import Profile from '../pages/Configuration/components/Profile/Profile'
import Management from '../pages/Configuration/components/Management/Management'
import ManagementPosts from '../pages/Configuration/components/Posts/ManagementPosts'
import { UserContextProvider } from '../context/UserContext'
import { PostContextProvider } from '../context/PostContext'

const Routes = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' element={<PublicRoute component={Login} />} />
          <Route path='/register' element={<PublicRoute component={Register} />} />
          <Route path='/recover' element={<PublicRoute component={Recover} />} />
          <Route
            path='/'
            element={
              <UserContextProvider>
                <PostContextProvider>
                  <ProtectedRoute component={MainPage} />
                </PostContextProvider>
              </UserContextProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path='acerca' element={<AcercaPage />} />
            <Route path='configuracion' element={<Configuration />}>
              <Route path='perfil' element={<Profile />} />
              <Route path='gestion' element={<Management />} />
              <Route path='publicaciones' element={<ManagementPosts />} />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
