import Image, { StaticImageData } from 'next/image';

interface HeadImageProps {
  source: StaticImageData;
  text: string;
}

function HeadImage(props: HeadImageProps) {
  return (
    <Image
      src={props.source}
      alt={props.text}
      quality={100}
      priority
      className="absolute -z-10 top-28 ml-24"
    />
  );
}

export default HeadImage;
