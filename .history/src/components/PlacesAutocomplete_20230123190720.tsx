import React, { useState, KeyboardEvent } from 'react'
import { Autocomplete as GoogleAutoComplete } from '@react-google-maps/api'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function PlacesAutocomplete() {
  const [search, setSearch] = useState('')
  const 

  const handleSubmit = (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      console.log(search)
      setSearch('')
    }
  }

  return (
    <GoogleAutoComplete>
      <TextField 
        variant="standard"
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