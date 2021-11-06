import React from 'react'
import FormPost from './FormPost'

const AddPost = () => {
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
            <div className='modal-header bg-dark w-100 m-0'>
              <h5 className='modal-title text-light' id='exampleModalLabel'>
                Crear una nueva oferta
              </h5>
            </div>
            <div className='modal-body'>
              <FormPost />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPost
