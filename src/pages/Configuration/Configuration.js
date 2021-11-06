import { Outlet } from 'react-router-dom'
import Options from './components/Options/Options'


const Configuration = () => {
  return (
    <>
      <div className='row m-0 p-0'>
        <div className='col-2 p-5'>
          <Options />
        </div>
        <div className='col-9 p-5'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Configuration
