import React, { useContext } from 'react'
import Card from './components/Post/Card'
import CardUser from './components/User/CardUser'
import AddPost from './components/AddPost/AddPost'
import { UserContext } from '../../context/UserContext'
import SpinnerBootstrap from '../../commons/SpinnerBootstrap'

const Home = () => {
  const { posts } = useContext(UserContext)
  const notImage = 'https://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'

  

  return (
    <div className='container-fluid pt-5 px-5'>
      <div className='row'>
        <div className='col-3 p-0'>
          <CardUser />
        </div>
        <div className='col-9'>
          <div className='row px-4 py-2 ms-auto m-5'>
            {posts.length > 0?
              posts.map((post) => {
                return (
                  <div className='col-3 mb-3' key={post.id}>
                    <Card
                      url={post.images.length > 0 ? post.images[0].url : notImage}
                      title={post.title}
                      description={post.description}
                    />
                  </div>
                )
              }) : 
              <SpinnerBootstrap />
            }
          </div>
        </div>
      </div>
      <AddPost />
    </div>
  )
}

export default Home
