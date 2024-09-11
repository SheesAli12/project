import React, { useEffect } from 'react';

const SliderSection = () => {
  useEffect(() => {
    // Initialize Owl Carousel (if using a library like Owl Carousel)
    if (window.$) {
      window.$('.home-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
      });
    }
  }, []);

  return (
    <section id="slider-section1" className="slider-section">
      <div className="home-slider owl-carousel owl-theme">
        <div className="item">
          <img
            src="/images/slides/slide-1.jpg"
            alt="Advertising"
            title="Advertising"
            height="500px"
            style={{ opacity: 0, visibility: 'hidden' }}
          />
          <div className="main-slider">
            <div className="main-table">
              <div className="main-table-cell">
                <div className="container w-100 d-flex justify-content-center">
                  <div className="main-content text-justify" style={{ textAlign: 'center' }}>
                    <h1
                      data-animation="fadeInUp"
                      data-delay="150ms"
                      className="display-1 fw-bold text-white text-shadow-black"
                    >
                      CRADLE CARE
                    </h1>
                    <p
                      data-animation="fadeInUp"
                      data-delay="200ms"
                      className="fw-normal text-justify text-white w-100 text-shadow-black"
                    >
                      <span className="fw-bold">A NAME YOU CAN TRUST</span> <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape2"><img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" /></div>
      <div className="shape3"><img src="/images/page-design-assets/clipart-2/2.png" alt="shape3" /></div>
      <div className="shape4"><img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" /></div>
      <div className="shape5"><img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" /></div>
    </section>
  );
};

export default SliderSection;
