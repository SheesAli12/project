import React from 'react'
import AboutUS from '../components/AboutUS'

const AboutUs = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center client-section"
      style={{ backgroundColor: '#00291B' }}
    >
      <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-4 border rounded bg-white shadow-lg my-5">
        {/* Include the Portfolio Section */}

        <div className="image-container mb-2 m-auto">
          {' '}
          {/* Adjusted margin-bottom */}
          <img
            src="/images/page-design-assets/clipart-2/us.png"
            alt="About Us"
            className="img-fluid"
            style={{
              height: '400px',
              objectFit: 'contain',
              // center the image
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
        <div className="text-left">
          <div className="cta-content mb-4">
            <div className="heading-default wow fadeInUp">
              <h2 className="text-orange mb-5 text-center">
                About <span className="text-secondary">Us</span>
              </h2>
              <h3
                className="text-secondary fw-normal"
                style={{
                  fontSize: '20px',
                }}
              >
                <span>For</span> more than 15 years, we have remained steadfast
                in our mission to export high-quality dental and surgical
                equipment to a diverse range of markets worldwide. Our
                dedication to excellence and customer satisfaction has allowed
                us to build and maintain strong, long-term relationships with
                our valued clients, including prominent hospitals and numerous
                private clinics spread across the United States. These
                partnerships are a testament to the trust and confidence our
                clients place in our products and services, and we strive every
                day to uphold that trust through continuous improvement and
                innovation.
                <br />
                <br />
                At the core of our business is a commitment to delivering
                top-tier products at competitive rates. We understand that
                healthcare providers rely on dependable and efficient equipment
                to deliver optimal care to their patients, and we are proud to
                offer solutions that meet the highest standards of performance,
                safety, and reliability. Despite offering competitive pricing,
                we refuse to compromise on the quality of our equipment,
                ensuring that our clients always receive the best value for
                their investment.
                <br />
                <br />
                Our comprehensive product range covers all the essential needs
                of medical, dental, and surgical practices, from everyday tools
                to advanced equipment designed to enhance the efficiency of
                clinical procedures. Whether you are in the process of opening a
                new clinic or healthcare facility, expanding your services, or
                simply looking to upgrade your existing inventory with the
                latest technology, we are confident that our wide selection will
                cater to your unique requirements.
                <br />
                <br />
                Moreover, our experienced and knowledgeable team is always ready
                to provide personalized support to ensure you make informed
                decisions when selecting equipment for your practice. Should you
                require customized solutions or specific items not readily
                available in our catalog, we are more than happy to accommodate
                special requests and create tailored quotes to suit your needs.
                <br />
                <br />
                At every step of the way, from consultation to delivery and
                beyond, we remain committed to providing an exceptional customer
                experience. Our ongoing dedication to superior quality and
                client satisfaction has set us apart as a trusted provider in
                the healthcare industry, and we look forward to continuing to
                serve healthcare professionals and facilities both in the United
                States and abroad.
              </h3>

              <h5>
                <strong className="text-dark">
                  {' - '}
                  The Cradle Care USA Team,{' '}
                  <span className="text-secondary">Your Trusted Partner</span>
                </strong>
              </h5>
            </div>
          </div>
        </div>
        {/* Include the Footer */}
      </div>
      <div className="shape2">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>
      <div className="shape3">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape3" />
      </div>
      <div className="shape4">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape5">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape6">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape6" />
      </div>
      <div className="shape7">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape8">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape9">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape10">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>

      <div className="shape11">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape12">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>

      <div className="shape13">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>
      <div className="shape14">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape3" />
      </div>
      <div className="shape15">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape16">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape17">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape6" />
      </div>
      <div className="shape18">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape19">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape20">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape21">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>

      <div className="shape22">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape23">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
    </div>
  )
}

export default AboutUs
