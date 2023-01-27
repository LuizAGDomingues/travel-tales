import Link from 'next/link';

import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HotelIcon from '@mui/icons-material/Hotel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

interface IconsMenuProps {
  horizontal?: boolean;
}

function IconsMenu({ horizontal = false }: IconsMenuProps) {
  return (
    <>
      {horizontal ? (
        <div className="mt-20 flex items-center justify-center gap-14">
          <Link href={'/explore'}>
            <ExploreOutlinedIcon sx={{ fontSize: 46 }} color="primary" />
          </Link>
          <Link href={'/info'}>
            <InfoOutlinedIcon sx={{ fontSize: 46 }} color="primary" />
          </Link>
          <Link href={'/taxi'}>
            <LocalTaxiIcon sx={{ fontSize: 46 }} color="primary" />
          </Link>
          <Link href={'/hotels'}>
            <HotelIcon sx={{ fontSize: 46 }} color="primary" />
          </Link>
          <Link href={'/restaurants'}>
            <FastfoodIcon sx={{ fontSize: 46 }} color="primary" />
          </Link>
        </div>
      ) : (
        <div className="ml-16 mt-10 flex flex-col gap-14">
          <Link href={'/explore'}>
            <ExploreOutlinedIcon sx={{ fontSize: 46 }} />
          </Link>
          <Link href={'/info'}>
            <InfoOutlinedIcon sx={{ fontSize: 46 }} />
          </Link>
          <Link href={'/taxi'}>
            <LocalTaxiIcon sx={{ fontSize: 46 }} />
          </Link>
          <Link href={'/hotels'}>
            <HotelIcon sx={{ fontSize: 46 }} />
          </Link>
          <Link href={'/restaurants'}>
            <FastfoodIcon sx={{ fontSize: 46 }} />
          </Link>
        </div>
      )}
    </>
  );
}

export default IconsMenu;
