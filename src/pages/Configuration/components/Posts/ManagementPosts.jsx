import { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../../../../context/UserContext'
import { deletePost } from '../../../../static/js/postController'
import AddPost from '../../../Home/components/AddPost/AddPost'
import HeaderPosts from '../../../Home/components/Header/HeaderPosts'
import FormPostEdit from './FormPostEdit'

const ManagementPosts = () => {
  const { posts, setPosts } = useContext(UserContext)
  const [selected, setSelected] = useState({
    businessHours: 'string',
    description: 'string',
    direction: 'string',
    id: 0,
    images: [],
    primaryTelephone: 'string',
    secondaryEmail: 'string',
    secondaryTelephone: 'string',
    title: 'string',
    type: 'string',
    user: {
      email: 'string',
      id: 0,
      name: 'string',
      uid: 'string',
    },
  })

  if (posts.length <= 0) {
    return <Navigate to='/' />
  }

  const handleRemove = async (id) => {
    console.log(id)
    await deletePost(parseInt(id))

    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleEdit = (id) => {
    setSelected(...posts.filter((post) => post.id === id))
  }

  return (
    <>
      <div className='card w-100 shadow-sm'>
        <div className='card-body'>
          <div className='px-5'>
            <HeaderPosts />
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Type</th>
                  <th scope='col'>Direction</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => {
                  return (
                    <tr>
                      <th scope='row'>{post.id}</th>
                      <td>{post.title}</td>
                      <td>{post.type}</td>
                      <td>{post.direction}</td>
                      <td>
                        <i
                          type='button'
                          class='bi bi-pencil-square me-4'
                          name='edit'
                          data-bs-toggle='modal'
                          data-bs-target='#formPostEdit'
                          onClick={() => handleEdit(post.id)}
                        ></i>
                        <i
                          type='button'
                          class='bi bi-trash-fill'
                          name='remove'
                          onClick={() => handleRemove(post.id)}
                        ></i>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-center mb-3'>
          <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#formPost'>
            Agregar una publicación
          </button>
        </div>
      </div>
      <AddPost />
      {selected ? <FormPostEdit selected={selected} setSelected={setSelected} /> : null}
    </>
  )
}

export default ManagementPosts
