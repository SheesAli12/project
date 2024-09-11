import React from 'react';
import SliderSection from '../components/SliderSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutUS from '../components/AboutUS';
import ClientSection from '../components/ClientSection';
import DesignSection from '../components/DesignSection';
import FooterSection from '../components/FooterSection';


const Home = () => {
  return (
    <div>
      {/* Include the Slider Section */}
      <SliderSection />
            {/* Include the Portfolio Section */}
            <PortfolioSection />


      {/* Include the Client Section */}
      <ClientSection />

      {/* Include the Design Section */}
      <DesignSection />



      {/* Include the Footer */}
      <FooterSection />
    </div>
  );
};

export default Home;
