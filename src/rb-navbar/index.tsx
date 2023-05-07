'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavbarItem from './navbarItem';
import ProfileIcon from './profileIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    {
      name: 'Explore products',
      path: '#',
    },
    {
      name: 'Product design',
      path: '#',
    },
    {
      name: 'Pricing',
      path: '#',
    },
  ];

  return (
    <nav className='bg-white'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Image className='sm:ml-12' src='/assets/logo-full.png' width={128} height={128} alt='Better Goods Logo' />
          {/* Hamburger menu */}
          <div className='flex sm:hidden'>
            <button
              type='button'
              className=' focus:outline-none focus:text-gray-300'
              aria-label='Toggle menu'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg viewBox='0 0 20 20' className='w-6 h-6 fill-current'>
                <path
                  fillRule='evenodd'
                  d='M2.5 5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm0 4h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm0 4h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1z'></path>
              </svg>
            </button>
          </div>
          {/* Navbar items */}
          <div className='hidden sm:flex sm:items-center'>
            <NavbarItem items={menuItems} />
          </div>

          {/* Profile  */}
          <div className='hidden sm:flex sm:items-center'>
            <ProfileIcon />
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm:hidden ${isMenuOpen ? '' : 'hidden'}`} id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <div className='flex flex-col items-center'>
            <NavbarItem items={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
