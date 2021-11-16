import React from 'react'
import CardUser from './components/User/CardUser'
import AddPost from './components/AddPost/AddPost'
import ListPosts from './components/Post/ListPosts'

const Home = () => {
  
  return (
    <div className='container-fluid pt-5 px-5'>
      <div className='row'>
        <div className='col-3 p-0'>
          <CardUser />
        </div>
        <div className='col-9'>
          <div className='row px-4 py-2 ms-auto'>
            <ListPosts />
          </div>
        </div>
      </div>
      <AddPost />
    </div>
  )
}

export default Home
