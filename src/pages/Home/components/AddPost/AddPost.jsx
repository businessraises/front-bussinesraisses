import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../context/UserContext'
import { savePost } from '../../../../static/js/postController'
import { getUser } from '../../../../static/js/userController'
import FormPost from './FormPost'

const AddPost = () => {
  const { user, posts, setPosts } = useContext(UserContext)
  const [form, setForm] = useState({})
  const [hours, setHours] = useState({})

  const handleToPost = async (event) => {
    event.preventDefault()
    const { uid } = await getUser()
    const data = {
      ...form,
      businessHours: `${hours.hourInitial}${hours.stateHourInitial} - ${hours.hourFinal}${hours.stateHourFinal}`,
      user: {
        email: user.email,
        id: user.id,
        name: user.name,
        uid
      },
      images: []
    }

    const response = await savePost(data)
    setPosts([
      ...posts,
      response
    ])
    
  }

  return (
    <>
      <div
        className='modal fade'
        id='formPost'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <h5 className='modal-title mb-2' id='exampleModalLabel'>
                Crear una nueva oferta
              </h5>
              <FormPost
                form={form}
                setForm={setForm}
                hours={hours}
                setHours={setHours}
                handleToPost={handleToPost}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPost
