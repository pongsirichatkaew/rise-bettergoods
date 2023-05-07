import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between py-20 sm:py-32 px-4'>
      {/* Text */}
      <div className='sm:w-1/2 sm:p-12'>
        <h1 className='text-5xl font-bold mb-4 leading-loose'>Higher click-through rates for your product</h1>
        <p className='text-lg text-gray-400 leading-relaxed mb-8'>
          Don&apos;t stop tracking your product and better analyze your customers just too easy steps.
        </p>
      </div>
      {/* Image */}
      <div className='sm:w-1/2 sm:pl-10'>
        <Image src='/assets/click-through-rate.png' width={538} height={411} alt='Image' />
      </div>
    </div>
  );
};

export default HeroSection;
