import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15vmin' }}>
        <h1>404: Not Found</h1>
        <p>Go to:- <Link to="/">Home</Link></p>
      </div>
    </>
  )
}

export default NotFound