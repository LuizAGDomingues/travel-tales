import React, { useState } from 'react'
import { Autocomplete as GoogleAutoComplete } from '@react-google-maps/api'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function PlacesAutocomplete() {

  return (
    <GoogleAutoComplete>
      <TextField 
        variant="standard"
        placeholder='Search for your nearest picnic spot' 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 38 }} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)', padding: '0.75px 20px', fontFamily: 'Poppins', marginTop: '1.5rem'}}
        className='text-black mt-6 w-[44rem] rounded-full'
      />
    </GoogleAutoComplete>
  )
}

export default PlacesAutocomplete