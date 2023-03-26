import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const links = []

  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='/logo.svg' className='h-6 mr-3 sm:h-9' alt='Logo' />
          <span className='self-center text-xl font-semibold whitespace-nowrap '>
            City Lens
          </span>
        </Link>
        <div className='flex'>
          <Link to={'/docs'} className='flex md:order-2 mr-3'>
            <button
              type='button'
              className='text-primary bg-white focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 border border-secondary'
            >
              API Docs
            </button>
          </Link>
          <Link to={'/add-art'} className='flex md:order-2'>
            <button
              type='button'
              className='text-white bg-primary hover:bg-secondary  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 '
            >
              Add Art
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
