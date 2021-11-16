import AddPost from '../../../Home/components/AddPost/AddPost'
import SearchBar from '../../../Home/components/Header/SearchBar'
import TablePosts from './TablePosts'

const ManagementPosts = () => {
  return (
    <>
      <div className='card w-100 shadow-sm'>
        <div className='card-body'>
          <div className='px-5'>
            <SearchBar />
            {/* table */}
            <TablePosts />
          </div>
        </div>
        <div className='text-center mb-3'>
          <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#formPost'>
            Agregar una publicación
          </button>
        </div>
      </div>
      <AddPost />
    </>
  )
}

export default ManagementPosts
