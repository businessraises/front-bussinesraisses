import React from 'react'

const Card = ({ name, description, link }) => {
  return (
    <>
      <div className='card w-100 shadow-sm'>
        <div className='card-body'>
          <div className='card-title text-center'>
            <span style={{ fontSize: '15vh' }}>
              <i className='bi bi-person-circle'></i>
            </span>
            <h5>{name}</h5>
            <hr className='w-75 mx-auto' />
          </div>
          <div className='card-text text-center'>
            {description}
            <div className='text-center'>
              <hr className='w-100 mx-auto' />
              <a
                href={link}
                className='btn btn-primary w-100'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
