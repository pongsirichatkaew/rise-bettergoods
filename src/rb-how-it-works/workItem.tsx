import { FC } from 'react';
import Image from 'next/image';

export type WorkItemProps = {
  altImage: string;
  image: string;
  title: string;
  description: string;
};

const WorkItem: FC<WorkItemProps> = (props) => {
  const { image, altImage, title, description } = props;
  return (
    <div className='max-w-sm rounded overflow-hidden'>
      <Image src={image} width={300} height={200} alt={altImage} />
      <div className='px-6 py-4 max-w-xs'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
