import React from 'react'
import CardUser from './components/User/CardUser'
import AddPost from './components/AddPost/AddPost'
import { Outlet } from 'react-router'

const Home = () => {
  
  return (
    <div className='container-fluid pt-5 px-5'>
      <div className='row'>
        <div className='col-3 p-0'>
          <CardUser />
        </div>
        <div className='col-9'>
          <div className='row px-4 py-2 ms-auto'>
            <Outlet />
          </div>
        </div>
      </div>
      <AddPost />
    </div>
  )
}

export default Home
