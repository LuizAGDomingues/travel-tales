import { KeyboardEvent, useEffect, useState } from 'react';
import Head from 'next/head'
import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HeadImage from '@/components/HeadImage'
import Header from '@/components/Header'
import IconsMenu from '@/components/IconsMenu'
import Text from '@/components/Text'

import homeImage from '../assets/illustration 1.png'

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { useLoadScript } from '@react-google-maps/api'

export default function Home() {
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

  const [search, setSearch] = useState('')
  const [userLatitude, setUserLatitude] = useState('')
  const [userLongitude, setUserLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setUserLatitude(latitude.toString())
        setUserLongitude(longitude.toString())
      },
      (error) => {
        console.error(error);
      },
    );
  }, [])

  if(!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Travel Tales</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <header>
          <Header/>
          <HeadImage source={homeImage} text='Imagem de uma família em uma barco' />
        </header>
        <section className='absolute'>
          <IconsMenu />
        </section>

        <section className='flex flex-col items-center justify-center w-full mt-[22rem]'>
          <Text title text='Travel' />
          <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={['teste 1', 'teste 2', 'teste 3', 'teste 4']}
            renderInput={
              (params: JSX.IntrinsicAttributes & TextFieldProps) => {
                <TextField 
                  variant="standard"
                  type={'search'}
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
              }
            }
          />
          <IconsMenu horizontal />
        </section>
      </main>
    </>
  )
}
