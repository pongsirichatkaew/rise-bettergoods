import HowItWorksSections from '../rb-how-it-works';
import HeroSection from '../rb-herosection';
import PowerupSection from '../rb-powerup';
import Navbar from '../rb-navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSections />
      <PowerupSection />
    </>
  );
};

export default LandingPage;
