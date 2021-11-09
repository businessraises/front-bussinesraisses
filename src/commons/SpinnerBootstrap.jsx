const SpinnerBootstrap = ({ size = 5 }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-border  mt-5'
        role='status'
        style={{ width: `${size}vh`, height: `${size}vh` }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default SpinnerBootstrap
