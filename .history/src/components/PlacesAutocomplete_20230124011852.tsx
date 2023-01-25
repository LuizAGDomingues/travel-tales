import React, { useState, KeyboardEvent, useRef } from 'react'
import { Autocomplete as GoogleAutoComplete } from '@react-google-maps/api'

function PlacesAutocomplete() {
  const [search, setSearch] = useState('')
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      if(searchRef.current?.value.trim() === '') {
        setSearch('')
        return
      }
      setSearch('')
    }
  }

  return (
    <GoogleAutoComplete>
      <input 
        onKeyDown={handleSubmit}
        ref={searchRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search for your nearest picnic spot' 
        style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)', padding: '0.75rem 1.25rem', marginTop: '1.5rem'}}
        className='text-black w-[44rem] rounded-full font-poppins'
      />
    </GoogleAutoComplete>
  )
}

export default PlacesAutocomplete