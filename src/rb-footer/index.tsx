import Image from 'next/image';
import Link from 'next/link';
import FooterSocial from './footerSocial';

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto px-4 lg:px-8'>
        <div className='flex sm:flex-row flex-col sm:items-center justify-between h-16'>
          {/* Logo */}
          <Image className='sm:ml-12' src='/assets/logo-alone.png' width={64} height={64} alt='Better Goods Footer' />

          {/* Footer items */}
          <div className='flex sm:flex-row flex-col'>
            <Link href='#' className='sm:px-12 py-2 rounded-md text-sm font-medium'>
              Ornare
            </Link>
            <Link href='#' className='sm:px-12 py-2 rounded-md text-sm font-medium'>
              Accunsan
            </Link>
            <Link href='#' className='sm:px-12 py-2 rounded-md text-sm font-medium'>
              Mattis
            </Link>
          </div>

          {/* Footer Socials */}
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
