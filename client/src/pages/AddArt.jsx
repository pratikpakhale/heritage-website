import { useState } from 'react'

import { Link } from 'react-router-dom'

function AddArt() {
  const [art, setArt] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [city, setCity] = useState('')
  const [artist, setArtist] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (
      art.trim() === '' ||
      desc.trim() === '' ||
      image.trim() === '' ||
      city.trim() === '' ||
      artist.trim() === ''
    ) {
      return
    }

    const artData = {
      name: art,
      description: desc,
      image,
      city,
      artist,
    }

    fetch(import.meta.env.VITE_API_ENDPOINT + '/api/arts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.name) {
          setArt('')
          setDesc('')
          setImage('')
          setCity('')
          setArtist('')
        } else {
          alert('Something went wrong! Error: ' + JSON.stringify(data))
        }
      })
  }

  return (
    <form className='px-10 my-10' onSubmit={handleSubmit}>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='art'
          value={art}
          onChange={e => setArt(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='art'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Art
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='desc'
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='desc'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Art Description
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='image'
          value={image}
          onChange={e => setImage(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='image'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Cover Image URL
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='artist'
          value={artist}
          onChange={e => setArtist(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='artist'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Artist Profile URL
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='city'
          value={city}
          onChange={e => setCity(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='city'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          City - must be in the database
        </label>
      </div>

      <button
        type='submit'
        className='text-white bg-primary hover:bg-secondary focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
      >
        Submit
      </button>
      <Link
        to='/add-city'
        type='button'
        className='ml-4 text-secondary bg-white border border-secondary focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
      >
        Add a City
      </Link>
    </form>
  )
}

export default AddArt
