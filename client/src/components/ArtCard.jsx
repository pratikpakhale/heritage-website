function ArtCard({ art }) {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow  h-min'>
      <div>
        <img className='rounded-t-lg' src={art?.image} alt='' />
      </div>
      <div className='p-5'>
        <div>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            {art?.name}
          </h5>
        </div>
        <p className='mb-3 font-normal text-gray-700 '>{art?.description}</p>
        <p className='mb-3 '>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded '>
            {art?.city?.name}
          </span>
        </p>
        <a
          href={art?.artist}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:secondary focus:outline-non '
        >
          Sponsor Artist
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ArtCard
