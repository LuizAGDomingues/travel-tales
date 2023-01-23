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
        style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)', padding: '12px 20px', font}}
        className='text-black mt-6 w-[44rem] rounded-full font-poppins'
      />
    </GoogleAutoComplete>
  )
}

export default PlacesAutocomplete