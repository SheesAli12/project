import React from 'react'
import { Link } from 'react-router-dom'

const DesignSection = () => {
  return (
    <section
      id="services"
      className="design-section py-5 bg-primary-light design-home "
    >
      <div className="container pt-4">
        <div className="row pt-4">
          <div className="col-lg-7 col-12 mx-lg-auto mb-5 text-center">
            <div className="heading-default wow fadeInUp">
              <span className="badge badge-primary">Explore Our Services</span>
              <h2>
                Our Services &<span className="text-primary"> Business </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-6 col-12 mb-lg-0 mb-5 wow fadeInLeft">
            <div className="design-img justify-content-lg-start justify-content-center">
              <img
                src="/images/page-design-assets/design-img.png"
                className="img-fluid"
                alt="Development"
              />
            </div>
          </div>
          <div className="col-lg-6 col-12 wow fadeInRight">
            <div className="row row-cols-1 row-cols-md-2 g-4 design-wrp">
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/10.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Imports & exports</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/20.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Dental equipment supply</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/30.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Medical equipment</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/40.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Supply chain services</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/50.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Advertising</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/60.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Growth development</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/70.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Marketing services</Link>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="design-item">
                  <div className="design-icon">
                    <div className="design-corn">
                      <img
                        src="/images/page-design-assets/clipart-2/80.png"
                        alt="Custom Icon"
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div className="design-content">
                    <strong className="design-title">
                      <Link to="/">Surgical equipment supply</Link>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img
          src="./images/page-design-assets/clipart-2/shape1.png"
          alt="shape1"
        />
      </div>
    </section>
  )
}

export default DesignSection
