import HowItWorksSections from '../rb-how-it-works';
import HeroSection from '../rb-herosection';
import Navbar from '../rb-navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSections />
    </>
  );
};

export default LandingPage;
