import Image, { StaticImageData } from 'next/image';

import { Button } from '@mui/material';

import logo from '../assets/logo.png';
import imageExample from '../assets/userImage-example.png';

interface HeaderProps {
  isLogin?: boolean;
  userImageURL?: StaticImageData;
}

function Header({ isLogin = true, userImageURL = imageExample }: HeaderProps) {
  return (
    <div className="flex items-start justify-between py-5 px-16">
      <Image src={logo} alt="Logo da Travel Tales" />
      {isLogin ? (
        <Image src={userImageURL} alt="Foto do usuário" />
      ) : (
        <Button
          href="/signin"
          variant="contained"
          className="bg-[#438ad1] text-white font-bold mt-5"
        >
          Login
        </Button>
      )}
    </div>
  );
}

export default Header;
