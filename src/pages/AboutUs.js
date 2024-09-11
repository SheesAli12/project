import React from 'react';
import SliderSection from '../components/SliderSection';
import AboutUS from '../components/AboutUS';
import FooterSection from '../components/FooterSection';


const AboutUs = () => {
    return (
      <div>
        {/* Include the Slider Section */}
        <SliderSection />
        {/* Include the Portfolio Section */}
        <AboutUS />
        {/* Include the Footer */}
        <FooterSection />
      </div>
    );
  };
  
  export default AboutUs;