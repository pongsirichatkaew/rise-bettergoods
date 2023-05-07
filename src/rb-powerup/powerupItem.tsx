import { FC } from 'react';
import Image from 'next/image';

export type PowerupItemProps = {
  altImage: string;
  image: string;
  title: string;
  description: string;
};

const PowerupItem: FC<PowerupItemProps> = (props) => {
  const { image, altImage, title, description } = props;
  return (
    <div className='overflow-hidden flex flex-col items-center'>
      <Image src={image} width={500} height={400} alt={altImage} />
      <div className='px-6 py-4 max-w-xs text-center'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};

export default PowerupItem;
