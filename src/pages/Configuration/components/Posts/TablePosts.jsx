import useManagement from '../../../../hooks/useManagement'
import FormPostEdit from './FormPostEdit'

const TablePosts = () => {
  const { handleRemove, handleEdit, posts, selected} = useManagement()
  return (
    <>
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
          {posts.length <= 0 ? (
            <p>Este usuario no ha agredado ningun posts</p>
          ) : (
            posts.map((post) => {
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
            })
          )}
        </tbody>
      </table>
      {selected ? <FormPostEdit selected={selected} /> : null}
    </>
  )
}

export default TablePosts
