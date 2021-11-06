import React from 'react'

const HeaderPosts = () => {
  return (
    <div className='card w-100 text-center shadow-sm'>
      <div className='card-body'>
        <div className='card-title'>
        </div>
        <form className='d-flex'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Buscar'
            aria-label='Search'
          />
          <button className='btn btn-outline-primary' type='submit'>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeaderPosts
