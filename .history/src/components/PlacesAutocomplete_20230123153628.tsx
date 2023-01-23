import React, { useEffect, useState } from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Autocomplete, TextField } from '@mui/material';
import { useLoadScript } from '@react-google-maps/api';

interface optionsProps {
  description: string
}[]

function PlacesAutocomplete() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  })

  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions
  } = usePlacesAutocomplete();

  const [options, setOptions] = useState<optionsProps>([])

  useEffect(() => {
    if( status ) {
      data.map(({description}) => {
        console.log(description)
      })
    }
  }, [])

  return (
    <Autocomplete 
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      disabled={!ready}
      options={options}
      style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)'}}
      className='text-black mt-6 w-[44rem] rounded-full py-3 px-5 font-poppins'
      renderInput={(params) => <TextField {...params} variant="standard" placeholder='Search for your nearest picnic spot'/>}
    />
  )
}

export default PlacesAutocomplete