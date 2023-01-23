import { KeyboardEvent, useEffect, useState } from 'react';
import Head from 'next/head'
import HeadImage from '@/components/HeadImage'
import Header from '@/components/Header'
import IconsMenu from '@/components/IconsMenu'
import Text from '@/components/Text'

import homeImage from '../assets/illustration 1.png'

import { useLoadScript } from '@react-google-maps/api'
import PlacesAutocomplete from '@/components/PlacesAutocomplete';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: "places",
  })

  const [search, setSearch] = useState('')


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
          <PlacesAutocomplete />
          <IconsMenu horizontal />
        </section>
      </main>
    </>
  )
}
