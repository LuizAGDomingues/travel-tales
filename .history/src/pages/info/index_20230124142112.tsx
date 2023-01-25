import Image from 'next/image'
import Head from 'next/head'
import HeadImage from '@/components/HeadImage'
import Header from '@/components/Header'
import IconsMenu from '@/components/IconsMenu'
import Text from '@/components/Text'
import { ExploreButtons } from '@/components/ExploreButtons'

import NavigationIcon from '@mui/icons-material/Navigation';

import infoImage from '@/assets/illustration 3.png'
import mapImage from '@/assets/map.png'
import { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useRouter } from 'next/router'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })

  const [userLatitude, setUserLatitude] = useState<number>()
  const [userLongitude, setUserLongitude] = useState<number>()

  useEffect(() => {
    
    /* navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setUserLatitude(latitude)
        setUserLongitude(longitude)
      },
      (error) => {
        console.error(error);
      },
    ); */
  }, [])

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
          <HeadImage source={infoImage} text='Imagem de pessoas viajando' />
        </header>
        <section className='absolute'>
          <IconsMenu />
        </section>

        <section className='flex flex-col items-center justify-center w-full mt-[17rem]'>
          <Text title text='Info' />
          <ExploreButtons.IconStart icon={<NavigationIcon sx={{ color: '#1A73E8', width: '30px', height: '30px' }}/>} text='Your selected spot' />
          <div className='flex items-center justify-center gap-11 mt-16'>
            { !isLoaded 
            ? <Image src={mapImage} alt='Imagem padrão do google maps' />
            : <GoogleMap 
                zoom={16} 
                center={{lat: userLatitude!, lng: userLongitude!}}
                mapContainerStyle={{ width: '1109px', height: '301px', borderRadius: '15px' }}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
              >
                <Marker position={{ lat: userLatitude!, lng: userLongitude! }} />
              </GoogleMap>
            }
            <div className='flex flex-col px-7 py-3 rounded-xl w-[24rem]' style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
              <Text text='About' className='underline decoration-[#1A73E8] mb-6 text-center'/>
              <Text text='Location : ' className='mb-4'/>
              <Text text='Entry Fee : ' className='mb-4'/>
              <Text text='Timings : ' className='mb-6'/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
