import Head from 'next/head'
import HeadImage from '@/components/HeadImage'
import Header from '@/components/Header'
import IconsMenu from '@/components/IconsMenu'
import Text from '@/components/Text'
import { ExploreButtons } from '@/components/ExploreButtons'

import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import exploreImage from '@/assets/illustration 2.png'

import { useState, useEffect } from 'react'
import { getNearbyPlaces } from '@/lib/getNearbyPlaces'
import { useLoadScript } from '@react-google-maps/api'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })

  const [userLatitude, setUserLatitude] = useState('')
  const [userLongitude, setUserLongitude] = useState('')
  const [closestPark, setClosestPark] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLatitude(latitude.toString())
        setUserLongitude(longitude.toString())
      },
      (error) => {
        console.error(error);
      },
    );
  }, [])

  const handleClickPark = async () => {
    console.log('entrou')
    const nearbyPark = await getNearbyPlaces(userLatitude, userLongitude, 'park')
    if(parseFloat(nearbyPark[0].geometry.location.lat.toString()) === Number) {
      console.log('é numero')
    } else if (nearbyPark[0].geometry.location.lat === String) {
      console.log('é string')
    } else {
      console.log('Não é')
    }
  }

  if(!isLoaded){
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
          <HeadImage source={exploreImage} text='Imagem de pessoas viajando' />
        </header>
        <section className='absolute'>
          <IconsMenu />
        </section>

        <section className='flex flex-col items-center justify-center w-full mt-[20rem]'>
          <Text title text='Explore' />
          <div className='flex items-center justify-center gap-7'>
            <ExploreButtons.IconStart icon={<TripOriginOutlinedIcon sx={{ color: '#4285F4', width: '32px', height: '32px' }}/>} text='Your location' />
            <ExploreButtons.IconStart icon={<LocationOnIcon sx={{ color: '#DB4437', width: '32px', height: '32px' }}/>} text='Nearest spot' />
          </div>
          <div className='flex flex-wrap mb-10 items-center justify-center gap-5'>
            <ExploreButtons.IconEnd onClick={handleClickPark} icon={<ParkIcon sx={{ color: '#0F9D58', width: '32px', height: '32px' }}/>} text='Write nearest park spot' />
            <ExploreButtons.IconEnd icon={<MuseumIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text='Write nearest museum spot' />
            <ExploreButtons.IconEnd icon={<ShoppingBagIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text='Write nearest shopping spot' />
            <ExploreButtons.IconEnd icon={<LocalDiningIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text='Write nearest restaurant spot' />
          </div>
        </section>
      </main>
    </>
  )
}
