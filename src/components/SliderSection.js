import React, { useEffect } from 'react'

const SliderSection = ({ title, shown = true }) => {
  useEffect(() => {
    const initializeSlider = () => {
      if (window.$) {
        const slider = window?.$('.home-slider')

        slider?.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
        })
      }
    }

    // Delay initialization slightly to ensure the DOM is fully rendered
    const timeoutId = setTimeout(initializeSlider, 1000)

    // Cleanup function to destroy the OwlCarousel when component unmounts
    return () => {
      clearTimeout(timeoutId)
      window?.$('.home-slider')?.trigger('destroy.owl.carousel')
    }
  }, [])

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
                  <div
                    className="main-content text-justify"
                    style={{ textAlign: 'center' }}
                  >
                    <h1
                      data-animation="fadeInUp"
                      data-delay="150ms"
                      className="display-1 fw-bold text-white text-shadow-black"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: title }}
                        style={{
                          textTransform: 'uppercase',
                        }}
                      />
                      {shown && 'CRADLE CARE'}
                    </h1>
                    {shown && (
                      <p
                        data-animation="fadeInUp"
                        data-delay="200ms"
                        className="fw-normal text-justify text-white w-100 text-shadow-black"
                      >
                        <span className="fw-bold">A NAME YOU CAN TRUST</span>{' '}
                        <br />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  )
}

export default SliderSection
