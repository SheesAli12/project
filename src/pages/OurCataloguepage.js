import React from 'react'
import SliderSection from '../components/SliderSection'
import OurCatalogueSection from '../components/OurCatalogues'
import FooterSection from '../components/FooterSection'
import { useParams } from 'react-router-dom'

const OurCataloguePage = () => {
  const { category } = useParams()

  return (
    <div>
      {/* Include the Slider Section */}
      <SliderSection title={`${category.split('-').join(' ')}`} shown={false} />
      {/* Include the Catalogue Section */}
      <OurCatalogueSection category={category} />
      {/* Include the Footer Section */}
    </div>
  )
}

export default OurCataloguePage
