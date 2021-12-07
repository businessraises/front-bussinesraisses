import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostContext from '../../../../context/PostContext'
import { saveComment, getComments } from '../../../../hooks/useComent'
import ListComent from './ListComent'
import { postLike } from '../../../../static/js/postController'
import UserContext from '../../../../context/UserContext'


const MoreInfo = ({ data }) => {
  const params = useParams()
  const { posts } = useContext(PostContext)
  const { user: userActive } = useContext(UserContext)

  const post = posts.find((post) => post.id === parseInt(params.id))
  const user = post.user

  const notImage = 'https://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'

  const [comentario, setComentario] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(null)

  useEffect(() => {
    getComments(post.id).then((data) => setComments(data))
  }, [post.id])

  /* Cargar comentarios */
  // const listComment = useComment(post.id)

  const onChange = (event) => {
    const { value } = event.target
    setComentario(value)
  }

  /* Enviar comentario */
  const submitComment = async () => {
    const data = {
      comment: comentario,
      postId: post.id,
    }

    const element = await saveComment(data)
    setComentario('')

    setComments([...comments, element])
  }

  const handleLike = () => {
    postLike(post.id).then( res => setLikes(res.likes) )
  }

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4 p-4'>
          <img src={notImage} className='img-fluid rounded' alt='...' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'> {post.title} </h5>
            <p className='card-text'>{post.description}</p>
            <p className='card-text'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='Dueño'>Nombre Dueño</label>
                  <p className='text-muted' id='Dueño'>
                    {user.name}
                  </p>
                </div>
                <div className='col'>
                  <label htmlFor='Contacto'>Correo de contacto</label>
                  <p className='text-muted' id='Contacto'>
                    {user.email}
                  </p>
                </div>
                <div className='col'>
                  <label htmlFor='Telefono'>Telefono de contacto</label>
                  <p className='text-muted' id='Telefono'>
                    {post.primaryTelephone} - {post.secondaryTelephone}
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className='row g-0'>
        <div className='col-3'>
          <div className='row'>
            <label htmlFor='Direccion'>Direccion</label>
            <p id='Direccion' className='text-muted'>
              {' '}
              {post.direction}{' '}
            </p>
          </div>
          <div className='row'>
            <label htmlFor='Atencion'>Horario de Atención</label>
            <p id='Atencion' className='text-muted'>
              {' '}
              {post.businessHours}{' '}
            </p>
          </div>
          <div className='row'>
            <label htmlFor='Categoria'>Categoria</label>
            <p id='Categoria' className='text-muted'>
              {' '}
              {post.type}{' '}
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='Comentarios'>Comentarios</label>
              <button className='m-2 btn btn-success btn-sm' onClick={handleLike}>Like</button>
              <small className='float-end'>Like {likes ? likes : post.likes}</small>
              <div id='Comentarios'>
                <textarea
                  name='comentario'
                  id='comentario'
                  cols='30'
                  rows='1'
                  className='form-control'
                  placeholder='Comenta algo...'
                  value={comentario}
                  onChange={onChange}
                ></textarea>
                <button
                  className='btn btn-info float-end btn-sm mt-2 w-100 bg-primary bg-gradient'
                  onClick={submitComment}
                >
                  Publicar comentario
                </button>
              </div>
            </div>
          </div>
          <div className='row'>
            {comments.map((comment) => {
              return (
                <div className='row'>
                  <ListComent data={comment} idUserGlobal={userActive.id} setState={setComments} state={comments} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
