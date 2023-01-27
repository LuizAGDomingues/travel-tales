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

import { useState } from 'react'
import { getNearbyPlaces } from '@/lib/getNearbyPlaces'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { InferGetServerSidePropsType } from 'next'

export async function getServerSideProps(userLatitude: string, userLongitude: string) {
  
  if(userLatitude?.trim() === '' || userLatitude === undefined && userLongitude?.trim() === '' || userLongitude === undefined){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const [nearbyPark, nearbyMuseum, nearbyShopping, nearbyRestaurant] = await Promise.all([
    getNearbyPlaces(userLatitude!, userLongitude, 'park'),
    getNearbyPlaces(userLatitude!, userLongitude, 'museum'),
    getNearbyPlaces(userLatitude!, userLongitude, 'shopping'),
    getNearbyPlaces(userLatitude!, userLongitude, 'restaurant')
  ])
  return {
    nearbyPark,
    nearbyMuseum,
    nearbyShopping,
    nearbyRestaurant
  }
}

export default function Home() {
  const [closestPark, setClosestPark] = useState({name: '', lat: '', lng: ''})
  const [closestMuseum, setClosestMuseum] = useState({name: '', lat: '', lng: ''})
  const [closestShopping, setClosestShopping] = useState({name: '', lat: '', lng: ''})
  const [closestRestaurant, setClosestRestaurant] = useState({name: '', lat: '', lng: ''})
  const [userLatitude, setUserLatitude] = useState('')
  const [userLongitude, setUserLongitude] = useState('')

  const router = useRouter()
  const { lat, lng } = router.query
  setUserLatitude(lat!.toString())
  setUserLongitude(lng!.toString())

  const nearbyPlaces = getServerSideProps(userLatitude, userLongitude)

  


  if(nearbyPark.name != undefined && nearbyMuseum.name != undefined && nearbyShopping.name != undefined && nearbyRestaurant.name != undefined){
    setClosestPark({
      name: nearbyPark.name,
      lat: nearbyPark.geometry.location.lat,
      lng: nearbyPark.geometry.location.lng
    })
    setClosestMuseum({
      name: nearbyMuseum.name,
      lat: nearbyMuseum.geometry.location.lat,
      lng: nearbyMuseum.geometry.location.lng
    })
    setClosestShopping({
      name: nearbyShopping.name,
      lat: nearbyShopping.geometry.location.lat,
      lng: nearbyShopping.geometry.location.lng
    })
    setClosestRestaurant({
      name: nearbyRestaurant.name,
      lat: nearbyRestaurant.geometry.location.lat,
      lng: nearbyRestaurant.geometry.location.lng
    })
  } else {
    alert('Erro inesperado')
    return
  }

  const handleClickPark = () => {
    Router.push({
      pathname: '/info',
      query: {
        lat: closestPark.lat.toString(),
        lng: closestPark.lng.toString()
      }
    })
  }
  const handleClickMuseum = () => {
    Router.push({
      pathname: '/info',
      query: {
        lat: closestMuseum.lat.toString(),
        lng: closestMuseum.lng.toString()
      }
    })
  }
  const handleClickShopping = () => {
    Router.push({
      pathname: '/info',
      query: {
        lat: closestShopping.lat.toString(),
        lng: closestShopping.lng.toString()
      }
    })
  }
  const handleClickRestaurant = () => {
    Router.push({
      pathname: '/info',
      query: {
        lat: closestRestaurant.lat.toString(),
        lng: closestRestaurant.lng.toString()
      }
    })
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
            <ExploreButtons.IconEnd onClick={handleClickPark} icon={<ParkIcon sx={{ color: '#0F9D58', width: '32px', height: '32px' }}/>} text={closestPark.name} />
            <ExploreButtons.IconEnd onClick={handleClickMuseum} icon={<MuseumIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text={closestMuseum.name} />
            <ExploreButtons.IconEnd onClick={handleClickShopping} icon={<ShoppingBagIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text={closestShopping.name} />
            <ExploreButtons.IconEnd onClick={handleClickRestaurant} icon={<LocalDiningIcon sx={{ color: '#000', width: '32px', height: '32px' }}/>} text={closestRestaurant.name} />
          </div>
        </section>
      </main>
    </>
  )
}
