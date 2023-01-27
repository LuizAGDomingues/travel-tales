import Head from 'next/head';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HailIcon from '@mui/icons-material/Hail';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

import taxiImage from '@/assets/illustration 4.png';
import { ExploreButtons } from '@/components/ExploreButtons';
import Header from '@/components/Header';
import HeadImage from '@/components/HeadImage';
import IconsMenu from '@/components/IconsMenu';
import Text from '@/components/Text';

export default function Home() {
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
          <Header />
          <HeadImage source={taxiImage} text="Imagem de pessoas viajando" />
        </header>
        <section className="absolute">
          <IconsMenu />
        </section>

        <section className="flex flex-col items-center justify-center w-full mt-[17rem]">
          <Text title text="Cab" />
          <ExploreButtons.IconStart
            icon={
              <LocalTaxiIcon
                sx={{ color: '#1A73E8', width: '30px', height: '30px' }}
              />
            }
            text="Taxis and Cars"
          />
          <ExploreButtons.IconBoth
            iconStart={
              <HailIcon
                sx={{ width: '40px', height: '40px', marginRight: '5px' }}
              />
            }
            iconEnd={<ArrowRightIcon sx={{ width: '30px', height: '30px' }} />}
            text="https://www.olacabs.com/"
            link="https://www.olacabs.com/"
            className="mt-16"
          />
          <ExploreButtons.IconBoth
            iconStart={
              <LocalTaxiIcon
                sx={{ width: '40px', height: '40px', marginRight: '5px' }}
              />
            }
            iconEnd={<ArrowRightIcon sx={{ width: '30px', height: '30px' }} />}
            text="https://www.uber.com/in/en/"
            link="https://www.uber.com/in/en/"
            className="mt-6"
          />
          <ExploreButtons.IconBoth
            iconStart={
              <TwoWheelerIcon
                sx={{ width: '40px', height: '40px', marginRight: '5px' }}
              />
            }
            iconEnd={<ArrowRightIcon sx={{ width: '30px', height: '30px' }} />}
            text="https://www.rapido.bike/"
            link="https://www.rapido.bike/"
          />
        </section>
      </main>
    </>
  );
}
