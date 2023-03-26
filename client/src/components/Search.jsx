function Search({ search, setSearch, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className='my-4 px-10 w-full'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
          placeholder='Mona Lisa'
          required=''
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 '
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Search
