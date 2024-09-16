import React from 'react'
import '../index.css' // Import CSS file for FooterSection

const FooterSection = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact-section1" className="main-footer pt-5">
      <div className="container pt-4">
        <div className="row pt-4 border-bottom border-primary justify-content-between">
          {/* Contact Details */}
          <div className="col-lg-4 col-md-6 col-12 mb-5 wow fadeInUp d-flex flex-column justify-content-center align-items-center">
            <div className="d-inline-flex flex-column">
              <div className="contact-area d-inline-flex align-items-center mb-3">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-info">
                  <p className="mb-0">
                    <a href="tel:+1 (303) 847 6673">+1 (303) 847 6673</a>
                  </p>
                </div>
              </div>
              <div className="contact-area d-inline-flex align-items-center mb-3">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-info">
                  <p className="text-start mb-0">
                    <a
                      href="https://goo.gl/maps/84iN69FxbXFwqq328"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aurora, Colorado <br /> USA 80016
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-area d-inline-flex">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="contact-info">
                  <p className="mb-0">
                    <a href="mailto:hi@huzaifmateen.com">hi@huzaifmateen.com</a>
                    <br />
                    <a href="mailto:huzaifmateen990@gmail.com">
                      huzaifmateen990@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div className="col-lg-4 col-md-6 wow fadeInUp d-flex flex-column justify-content-center align-items-center mb-5">
            <div className="d-inline-block">
              <a
                href="https://www.facebook.com/Lahoregfx/"
                className="footer-social-link"
                id="footer-social-link-Fb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/steroid.uzi?igshid=MmIzYWVlNDQ5Yg=="
                className="footer-social-link"
                id="footer-social-link-Insta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/huzaif-mateen-0008251b0"
                className="footer-social-link"
                id="footer-social-link-In"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <br />
              <a
                href="https://www.behance.net/huzaifmateen69"
                className="footer-social-link"
                id="footer-social-link-Be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-behance"></i>
              </a>
              <a
                href="https://www.fiverr.com/huzaifmateen"
                className="footer-social-link"
                id="footer-social-link-Fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fw-bolder">fr</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~019895e8c2426a42f9"
                className="footer-social-link"
                id="footer-social-link-Up"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fw-bolder">up</span>
              </a>
            </div>
          </div> */}

          {/* Map Section */}
          <div className="col-lg-4 col-md-6 wow fadeInUp mb-5">
            <aside className="">
              <div
                className="MyMap"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  width: '300px',
                  height: '150px',
                  margin: '0 auto',
                  overflow: 'hidden',
                  border: '5px solid #00291B',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98371.70045049179!2d-104.83907481332041!3d39.60207741765204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8c62c40286d7%3A0x9a7dc840eeefc8a5!2sAurora%2C%20CO%2080016%2C%20USA!5e0!3m2!1sen!2s!4v1688422594558!5m2!1sen!2s"
                  width="300"
                  style={{ border: '0' }}
                ></iframe>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="row py-2 justify-content-between">
          <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center">
            <div className="logo figure">
              <a href="/" className="d-inline-block">
                <img
                  src="./images/brand-logo/huzaif.png"
                  alt="Huzaif Mateen-Logo"
                />
                <img
                  src="./images/brand-logo/huzaif-yellow.png"
                  className="image-hover"
                  height="80px"
                  alt="Huzaif Mateen Logo"
                />
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center">
            <p className="text-center">
              Copyright © {new Date().getFullYear()} Cradle Care
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Up Button */}
      <button
        type="button"
        className="scrollingUp scrolling-btn"
        aria-label="scrollingUp"
        onClick={scrollToTop} // Add click event handler
      >
        <i className="fa fa-angle-up"></i>
      </button>

      {/* WhatsApp Contact
      <div className="whatsapp-contact" style={{ position: 'fixed', width: '40px', height: '40px', bottom: '70px', right: '15px', cursor: 'pointer', zIndex: '9999' }}>
        <a href="https://api.whatsapp.com/send?phone=13038476673" target="_blank" rel="noopener noreferrer">
          <img src="./images/whatsapp.png" width="100%" alt="WhatsApp" />
        </a>
      </div> */}
    </footer>
  )
}

export default FooterSection
