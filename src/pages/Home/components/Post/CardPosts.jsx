import React from 'react'
import './cardPost.css'

const CardPosts = () => {
  return (
    <div className='card shadow-sm p-0  '>
      <div className='row g-0'>
        <div className='col-md-4 w-25'>
          <img
            src='https://image.freepik.com/vector-gratis/logo-barberia-calavera_43623-577.jpg'
            className='img-fluid rounded-start'
            alt='...'
            style={{ minHeight: '100%' }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Barberia donde paco</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              enim odio aut nesciunt quia, totam tenetur sunt deleniti cumque
              impedit blanditiis assumenda est temporibus explicabo ad corrupti
              doloribus sapiente amet!
            </p>
            <p className='card-text'>
              <small className='text-muted'>Ofrece: Paco Villa</small>
              <small className='text-muted ms-4'>
                Dirección: Carrera 20 Calle 16 #9-20
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPosts
