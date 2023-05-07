import PowerupItem from './powerupItem';

const PowerupSection = () => {
  const powerupItems = [
    {
      altImage: 'Powerup Item1',
      image: '/assets/power-up-2.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      altImage: 'Powerup Item2',
      image: '/assets/power-up-3.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];
  return (
    <>
      <section className='bg-cover bg-center py-12' style={{ backgroundImage: `url('/assets/power-up-1.png')` }}>
        <div className='text-center'>
          <h1 className='text-5xl text-white font-bold sm:px-80 px-12 py-12'>Power-up your performance</h1>
          <p className='text-white leading-relaxed mb-8 sm:px-64 px-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>

          <p className='text-white leading-relaxed mb-8 sm:px-64 px-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </section>
      {/* POWER UP DETAIL */}
      <section>
        <div className='flex flex-col bg-gray-100 sm:flex-row items-center justify-center sm:py-12 space-x-4'>
          {/* Item */}
          <PowerupItem {...powerupItems[0]} />
          {/* Item */}
          <PowerupItem {...powerupItems[1]} />
        </div>
      </section>
    </>
  );
};

export default PowerupSection;
