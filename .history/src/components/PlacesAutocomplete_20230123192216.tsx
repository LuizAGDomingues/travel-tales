import React, { useState, KeyboardEvent, useRef } from 'react'
import { Autocomplete as GoogleAutoComplete } from '@react-google-maps/api'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function PlacesAutocomplete() {
  const [search, setSearch] = useState('')

  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      console.log(searchRef.current!.value)
      setSearch('')
    }
  }

  return (
    <GoogleAutoComplete>
      <Input 
        variant="standard"
        ref={searchRef}
        onKeyDown={handleSubmit}
        placeholder='Search for your nearest picnic spot' 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 38 }} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)', padding: '0.75rem 1.25rem', fontFamily: 'Poppins', marginTop: '1.5rem'}}
        className='text-black w-[44rem] rounded-full'
      />
    </GoogleAutoComplete>
  )
}

export default PlacesAutocomplete