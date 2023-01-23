import React, { useEffect, useState } from 'react'
import { Autocomplete as googleAutoComplete } from '@react-google-maps/api'
import { Autocomplete, TextField } from '@mui/material';

interface PlacesAutocompleteProps {
  userLatitude: number;
  userLongitude: number;
}

function PlacesAutocomplete() {

  const [options, setOptions] = useState<string[]>([])

  return (
    <TextField 
            variant="standard"
            type={'search'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)'}}
            className='text-black mt-6 w-[44rem] rounded-full py-3 px-5 font-poppins'
          />
  )
}

export default PlacesAutocomplete