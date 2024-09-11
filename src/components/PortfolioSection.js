import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const PortfolioSection = () => {
  return (
    <section id="about" className="design-section py-5 bg-primary-light design-home">
      <div className="container pt-4">
        <div className="row wow fadeInUp pt-4 align-items-center">
          {/* Image Container */}
          <div className="col-md-6">
            <div className="image-container">
              <img
                src="./images/page-design-assets/clipart-2/us.png"
                alt="shape1"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="col-md-6">
            <div className="text-container">
              <div className="text-center text-justify">
                <div className="cta-content mb-4">
                  <div className="heading-default wow fadeInUp">
                    <h2 className="text-black mb-5">
                      About <span className="text-secondary text-shadow-black">Us</span>
                    </h2>
                    <h4 className="text-secondary text-capitalize fw-bold">
                      Whether you're looking to restock your current inventory or are in the process of opening a new clinic, Cradle Care USA has you covered. We offer a wide range of medical, dental, and surgical equipment to meet your needs. Browse our catalog, and if you don't find what you're looking for, simply reach out via the "Contact Us" option, and we'll create a customized quote tailored specifically for you. Whatever your medical equipment needs, we've got it!
                    </h4>
                  </div>
                </div>
                <div className="text-center mt-4">
                  {/* Replace anchor tag with Link */}
                  <Link
                    to="/about" // Navigate to the About Us page
                    className="btn btn-primary btn-outline-secondary rounded-pill border border-2 border-secondary px-4 fs-5"
                  >
                    <strong>More About Us</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Shapes */}
      <div className="shape-star01"></div>
      <div className="shape-star02"></div>
      <div className="shape-star03"></div>
      <div className="shape-star04"></div>
      <div className="shape-cta01">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape1.png" alt="shape1" />
      </div>
      <div className="shape-cta02">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape2.png" alt="shape2" />
      </div>
      <div className="shape-cta03">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape3.png" alt="shape3" />
      </div>
      <div className="shape-cta04">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape4.png" alt="shape4" />
      </div>
      <div className="shape-cta05">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape5.png" alt="shape5" />
      </div>
      <div className="shape-cta06">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape6.png" alt="shape6" />
      </div>
      <div className="shape-cta07">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape3.png" alt="shape3" />
      </div>
      <div className="shape-cta08">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape6.png" alt="shape6" />
      </div>
      <div className="shape-cta09">
        <img src="./images/page-design-assets/clipart-1/ctaclipart/shape9.png" alt="shape9" />
      </div>
    </section>
  );
};

export default PortfolioSection;
