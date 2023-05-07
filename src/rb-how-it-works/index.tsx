import WorkItem from './workItem';

const HowItWorksSections = () => {
  const workItems = [
    {
      image: '/assets/how-it-work-1.png',
      altImage: 'How It work 1',
      title: '1.Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      image: '/assets/how-it-work-2.png',
      altImage: 'How It work 2',
      title: '2.Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      image: '/assets/how-it-work-3.png',
      altImage: 'How It work 3',
      title: '3.Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      image: '/assets/how-it-work-4.png',
      altImage: 'How It work 4',
      title: '4.Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];
  return (
    <section className='bg-gray-100 min-h-screen'>
      <div className='text-center sm:px-80 px-12'>
        <h1 className='text-5xl font-bold sm:py-24 py-12'>How BetterGoods Works?</h1>
        <p className='text-lg text-gray-400 leading-relaxed mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      {/* Items */}
      <div className='flex flex-col sm:flex-row sm:justify-center'>
        <div className='flex sm:flex-row flex-col justify-center sm:justify-start items-center sm:space-x-4 sm:space-y-0 space-y-4'>
          {workItems.map((workItem, index) => (
            <WorkItem key={`HowItWork${index}`} {...workItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSections;
