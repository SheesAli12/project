import React from 'react';
import SliderSection from '../components/SliderSection';
import OurCatalogueSection from '../components/OurCatalogues';
import FooterSection from '../components/FooterSection';

const OurCataloguePage = () => {
  return (
    <div>
      {/* Include the Slider Section */}
      <SliderSection />
      {/* Include the Catalogue Section */}
      <OurCatalogueSection />
      {/* Include the Footer Section */}
      <FooterSection />
    </div>
  );
};

export default OurCataloguePage;
