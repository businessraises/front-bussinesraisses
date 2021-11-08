import React from 'react'
import CardPosts from './components/Post/Card'
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
          <div className='row p-4 ms-auto'>
            <div className='col-3 mb-3'>
              <CardPosts url='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' />
            </div>
            <div className='col-3 mb-3'>
              <CardPosts url='https://image.freepik.com/vector-gratis/logo-barberia-calavera_43623-577.jpg' />
            </div>
          </div>
        </div>
      </div>
      <AddPost />
    </div>
  )
}

export default Home
