import React from 'react'
import Card from './components/Card'

const AcercaPage = () => {
  return (
    <>
      <div className='row p-5 m-0'>
        <div className='col-3'>
          <Card
            name='Omar Barros'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis venenatis pretium. Curabitur laoreet, ipsum et dignissim eleifend, purus turpis convallis justo, sed imperdiet justo felis sed lectus.'
            link='https://github.com/CamiloBarros'
          />
        </div>
        <div className='col-3'>
          <Card
            name='Miguel Manjarres'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis venenatis pretium. Curabitur laoreet, ipsum et dignissim eleifend, purus turpis convallis justo, sed imperdiet justo felis sed lectus.'
            link='https://github.com/DevTony101'
          />
        </div>
        <div className='col-3'>
          <Card
            name='Santiago Dangond'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis venenatis pretium. Curabitur laoreet, ipsum et dignissim eleifend, purus turpis convallis justo, sed imperdiet justo felis sed lectus.'
            link='https://github.com/devSantiago18'
          />
        </div>
        <div className='col-3'>
          <Card
            name='Miguel Acevedo'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis venenatis pretium. Curabitur laoreet, ipsum et dignissim eleifend, purus turpis convallis justo, sed imperdiet justo felis sed lectus.'
            link='https://github.com/P-UnKnow08'
          />
        </div>
      </div>
    </>
  )
}

export default AcercaPage
