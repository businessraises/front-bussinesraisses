import { useNavigate } from 'react-router'

const Card = ({ url, title, description, data }) => {
  const navigate = useNavigate()
  const handleShowInfo = () => {
    navigate(`/${data.id}`)
  }
  return (
    <div className='card p-0 btn' style={{ width: '18rem' }} onClick={handleShowInfo}>
      <img src={url} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
      </div>
    </div>
  )
}
export default Card
