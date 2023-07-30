import React from 'react'
import { Link } from 'react-router-dom'
import notfoundimg from './images/error 404.png'

const NotFound = () => {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15vmin' }}>
        <h1>404: Not Found</h1>
        <p>Go to:- <Link to="/">Home</Link></p>
        <img src={notfoundimg} style={{width: "100vmin"}} alt='404 error' />
      </div>
    </>
  )
}

export default NotFound