import Image from 'next/image';

const ProfileIcon = () => {
  return (
    <>
      <button className='sm:pr-8 hover:text-gray-500'>Logout</button>
      <button
        className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
        id='user-menu'
        aria-haspopup='true'>
        <Image src='/assets/profile.png' width={32} height={32} alt='Profile Picture' />
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-2' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M10 14a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 14z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </>
  );
};

export default ProfileIcon;
