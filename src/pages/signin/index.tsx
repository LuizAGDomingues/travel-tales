import Head from 'next/head';
import Image from 'next/image';

import { Button, TextField } from '@mui/material';

import signinImage from '@/assets/image 3.png';
import Header from '@/components/Header';
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
        </header>
        <section className="absolute">
          <IconsMenu />
        </section>
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Button
              style={{
                textTransform: 'none',
                border: 'none',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                borderRadius: '100px'
              }}
              className="px-8 text-black font-poppins"
            >
              <Text text="Create Account" />
            </Button>
            <TextField
              variant="standard"
              placeholder="Enter your full name"
              InputProps={{
                disableUnderline: true
              }}
              sx={{
                borderBottom: 2,
                borderStyle: 'dotted',
                borderColor: '#1A73E8'
              }}
              className="text-black mt-6 font-poppins w-[37rem]"
            />
          </div>
          <Image src={signinImage} alt="Imagem de mulher e um cartão" />
        </section>
      </main>
    </>
  );
}
