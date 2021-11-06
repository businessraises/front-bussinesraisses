import React from 'react'
import CardPosts from './components/Post/CardPosts'
import CardUser from './components/User/CardUser'
import HeaderPosts from './components/Header/HeaderPosts'
import AddPost from './components/AddPost/AddPost'

const Home = () => {
  return (
    <div className='container-fluid pt-5 px-5'>
      <div className='row'>
        <div className='col-3 p-0'>
          <CardUser />
        </div>
        <div className='col-9'>
          <div className='row ms-0'>
            <HeaderPosts />
          </div>
          <div className='row p-4'>
            <div className='row mb-3 mx-auto'>
              <CardPosts />
            </div>
            <div className='row mb-3 mx-auto'>
              <CardPosts />
            </div>
          </div>
        </div>
      </div>
      <AddPost />
    </div>
  )
}

export default Home
