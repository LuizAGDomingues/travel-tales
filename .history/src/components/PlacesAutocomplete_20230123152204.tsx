import React from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"

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