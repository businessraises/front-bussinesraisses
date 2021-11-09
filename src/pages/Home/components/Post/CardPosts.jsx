import React from 'react'
import './cardPost.css'

const CardPosts = ({ title, description, user, url }) => {
  return (
    <div className='card shadow-sm p-0  '>
      <div className='row g-0'>
        <div className='col-md-4 w-25'>
          <img
            src={url}
            className='img-fluid rounded-start'
            alt='...'
            style={{ minHeight: '100%' }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>
              {description}
            </p>
            <p className='card-text'>
              <small className='text-muted'>Ofrece: {user}</small>
              {/* <small className='text-muted ms-4'>
                Dirección: Carrera 20 Calle 16 #9-20
              </small> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPosts
