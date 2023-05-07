import Image from 'next/image';
import Link from 'next/link';

const footerSocial = () => {
  return (
    <div className='flex flex-row gap-4'>
      <Link href='#'>
        <Image src='/assets/facebook-logo.png' width={32} height={32} alt='Facebook Logo' />
      </Link>
      <Link href='#'>
        <Image src='/assets/twitter-logo.png' width={32} height={32} alt='Twitter Logo' />
      </Link>
      <Link href='#'>
        <Image src='/assets/instagram-logo.png' width={32} height={32} alt='Instagram Logo' />
      </Link>
      <Link href='#'>
        <Image src='/assets/youtube-logo.png' width={32} height={32} alt='Youtube Logo' />
      </Link>
    </div>
  );
};

export default footerSocial;
