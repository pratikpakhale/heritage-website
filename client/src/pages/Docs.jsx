function Docs() {
  return (
    <div className='w-full px-20 flex items-start flex-col'>
      <br />
      BASE ENDPOINT = {import.meta.env.VITE_API_ENDPOINT}
      <br />
      <h1 className='text-xl'>City Routes</h1>
      <br />
      <h2>GET Requests:</h2>
      <ul>
        <li>
          <strong>/api/cities</strong> - Get all cities
        </li>
        <li>
          <strong>/api/cities/name/:name</strong> - Get city by name
        </li>
        <li>
          <strong>/api/cities/state/:state</strong> - Get city by state
        </li>
        <li>
          <strong>/api/cities/pincode/:pincode</strong> - Get city by pincode
        </li>
        <li>
          <strong>/api/cities/:id</strong> - Get city by ID
        </li>
      </ul>
      <h2>POST Requests:</h2>
      <ul>
        <li>
          <strong>/api/cities</strong> - Add a new city
        </li>
      </ul>
      <h2>PUT Requests:</h2>
      <ul>
        <li>
          <strong>/api/cities/:id</strong> - Update an existing city by ID
        </li>
      </ul>
      <br />
      <br />
      <h1 className='text-xl'>Art Routes</h1>
      <br />
      <h2>GET Requests:</h2>
      <ul>
        <li>
          <strong>/api/arts/search</strong> - Search for art
        </li>
        <li>
          <strong>/api/arts/city/:city</strong> - Get arts by city
        </li>
        <li>
          <strong>/api/arts/:id</strong> - Get art by ID
        </li>
        <li>
          <strong>/api/arts</strong> - Get all arts
        </li>
      </ul>
      <h2>POST Requests:</h2>
      <ul>
        <li>
          <strong>/api/arts</strong> - Add a new art
        </li>
      </ul>
      <h2>PUT Requests:</h2>
      <ul>
        <li>
          <strong>/api/arts/:id</strong> - Update an existing art by ID
        </li>
      </ul>
      <h2>DELETE Requests:</h2>
      <ul>
        <li>
          <strong>/api/arts/:id</strong> - Delete an art by ID
        </li>
      </ul>
      <br />
      <br />
    </div>
  )
}

export default Docs
