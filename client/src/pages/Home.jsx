import { useState, useCallback, useEffect } from 'react'

import Search from '../components/Search'
import ArtCard from '../components/ArtCard'

function Home() {
  const [arts, setArts] = useState([])
  const [search, setSearch] = useState('')

  const fetchArts = useCallback(async () => {
    const response = await fetch(
      import.meta.env.VITE_API_ENDPOINT + '/api/arts'
    )
    const data = await response.json()
    console.log(data)
    setArts(data)
  }, [])

  useEffect(() => {
    fetchArts()
  }, [fetchArts])

  const handleSearch = async e => {
    e.preventDefault()

    const response = await fetch(
      import.meta.env.VITE_API_ENDPOINT + `/api/arts/search?query=${search}`
    )
    const data = await response.json()
    console.log(data)
    setArts(data)
  }

  return (
    <div className='flex items-center justify-center w-screen flex-col'>
      <Search search={search} setSearch={setSearch} onSubmit={handleSearch} />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-10'>
        {arts.map(art => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  )
}

export default Home
