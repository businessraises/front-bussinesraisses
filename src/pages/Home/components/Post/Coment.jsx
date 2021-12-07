import { deleteComment } from "../../../../hooks/useComent"

const Coment = ({ autor, comentario, idUserActive, idOwner, idComment, state, setState}) => {

  const handleDelete = () => {
    deleteComment(idComment)
    setState(state.filter( element => parseInt(element.id) !== parseInt(idComment) ))
  }

  return (
    <div className='card ps-2 mb-4 float-none rounded-3'>
      <div className='row g-0 '>
        <div className='col-1 px-2'>
          <span style={{ fontSize: '80px' }}>
            <i className='bi bi-person-circle'></i>
          </span>
          {/* <img src='...' className='img-fluid rounded-circle' alt='...' /> */}
        </div>
        <div className='col ps-4'>
          <div className='card-body'>
            <h5 className='card-title'>{autor}</h5>
            <p className='card-text'>{comentario}</p>
          </div>
        </div>
        {parseInt(idUserActive) === parseInt(idOwner) ? (
          <div className='col'>
            <button className='btn btn-danger mt-5 float-end' onClick={handleDelete}>Eliminar</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Coment
