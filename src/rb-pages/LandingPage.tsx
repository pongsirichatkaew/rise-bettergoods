import HowItWorksSections from '../rb-how-it-works';
import HeroSection from '../rb-herosection';
import PowerupSection from '../rb-powerup';
import Navbar from '../rb-navbar';
import Footer from '../rb-footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSections />
      <PowerupSection />
      <Footer />
    </>
  );
};

export default LandingPage;
