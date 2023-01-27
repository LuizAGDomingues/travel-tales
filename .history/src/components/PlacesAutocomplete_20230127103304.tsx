import React, { useState, KeyboardEvent, useRef, useEffect } from 'react'
import { Autocomplete as GoogleAutoComplete } from '@react-google-maps/api'
import { getCoordinatesFromAddress } from '@/lib/getCoordinatesFromAdress'
import Router from 'next/router'

function PlacesAutocomplete() {
  const [search, setSearch] = useState('')
  const [errorRender, setErrorRender] = useState(false)
  const [errorText, setErrorText] = useState('')
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      if(searchRef.current!.value.trim() === '') {
        setSearch('')
        alert('Digite uma pesquisa válida')
        return
      }
      const address = searchRef.current!.value;
      const coordinates = await getCoordinatesFromAddress(address);
      if(coordinates!.lat.toString() === undefined) {
        setSearch('')
        alert('Erro inesperado')
        return
      }
      const coordinateLat = coordinates!.lat.toString()
      const coordinateLng = coordinates!.lng.toString()
      
      setSearch('');

      Router.push({
        pathname: '/info',
        query: {
          lat: coordinateLat,
          lng: coordinateLng
        }
      })
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
      {errorRender}
    </GoogleAutoComplete>
  )
}

export default PlacesAutocomplete