import { useState } from 'react'

function AddCity() {
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')

  const submitHandler = e => {
    e.preventDefault()

    if (name.trim() === '' || state.trim() === '' || pincode.trim() === '') {
      return
    }

    const city = {
      name,
      state,
      pincode,
    }

    fetch('http://localhost:5000/api/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.name) {
          setName('')
          setState('')
          setPincode('')
        } else {
          alert('Something went wrong! Error: ' + JSON.stringify(data))
        }
      })
  }

  return (
    <form className='px-10 my-10' onSubmit={submitHandler}>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Name
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='state'
          value={state}
          onChange={e => setState(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='state'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          State
        </label>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='pincode'
          value={pincode}
          onChange={e => setPincode(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-secondary peer'
          placeholder='   '
          required=''
        />
        <label
          htmlFor='pincode'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Pincode
        </label>
      </div>

      <button
        type='submit'
        className='text-white bg-primary hover:bg-secondary focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
      >
        Submit
      </button>
    </form>
  )
}

export default AddCity
