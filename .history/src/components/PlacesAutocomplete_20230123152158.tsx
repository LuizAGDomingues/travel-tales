import React from 'react'

function PlacesAutocomplete() {
  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions
  } = usePlacesAutocomplete();
  
  return (
    <div>PlacesAutocomplete</div>
  )
}

export default PlacesAutocomplete