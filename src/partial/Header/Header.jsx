import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='vw-100 d-flex justify-content-center border-bottom border-3 border-info'>
        <h1 className='text-center m-auto'>To do list</h1>
        <div className='position-absolute end-0 top-0 fs-5 pt-2 pe-2 fw-bold'>
        <p>AMMOUR Remy</p>
        <p>DFS-2</p>
        </div>
    </header>
  )
}

export default Header
