import React, { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Up logic
      if (window.scrollY > 200) {
        document.querySelector('.scrollingUp').classList.add('is-active');
      } else {
        document.querySelector('.scrollingUp').classList.remove('is-active');
      }

      // Sticky Header logic
      if (window.scrollY >= 250) {
        document.querySelector('.is-sticky-on').classList.add('is-sticky-menu');
      } else {
        document.querySelector('.is-sticky-on').classList.remove('is-sticky-menu');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header id="main-header" className="main-header">
      <div className="navigation-wrapper" style={{ minHeight: '100px' }}>
        {/* Main Desktop Navigation */}
        <div className="main-navigation-area d-none d-lg-block">
          <div className="main-navigation is-sticky-on">
            <div className="container">
              <div className="row">
                <div className="col-2 my-auto">
                  <div className="logo figure">
                    <a href="/" className="custom-logo-link" rel="home" aria-current="page">
                      <img src="/images/brand-logo/huzaif.png" className="image-main" height="80px" alt="Huzaif Mateen Logo" />
                      <img src="/images/brand-logo/huzaif-yellow.png" className="image-hover" height="80px" alt="Huzaif Mateen Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-10 my-auto">
                  <nav className="navbar-area" id="navbar-area">
                    <div className="main-navbar">
                      <ul id="menu-navigation" className="main-menu nav">
                        <li className="menu-item nav-item">
                          <a title="home" href="/#home" className="nav-link">Home</a>
                        </li>
                        <li className="menu-item nav-item">
                          <a title="Contact" href="/#contact-section1" className="nav-link">Contact Us</a>
                        </li>

                        <li className="menu-item nav-item hide-on-mobile">
                          <a title="Clients" href="/#client-section1" className="nav-link">Clients</a>
                        </li>
                        <li className="menu-item nav-item">
                          <a title="About Us" href="/#about" className="nav-link">About Us</a>
                        </li>
                        <li className="menu-item nav-item hide-on-mobile">
                          <a title="Services" href="/#services" className="nav-link">Services</a>
                        </li>
                        <li className="menu-item nav-item">
                          <a title="Catalogue" href="/OurCatalogue" className="nav-link">Our Catalogue</a>
                        </li>
                        <li className="menu-item nav-item" style={{ borderLeft: '5px solid black', paddingLeft: '20px' }}>
                          <a title="Get a Quote" href="#quote" className="nav-link" style={{ color: 'white', fontWeight: 'bold' }}>
                            Get a Free Quote! Contact Us Now
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Mobile Navigation */}
        <div className="main-mobile-nav is-sticky-on">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="main-mobile-menu">
                  <div className="mobile-logo">
                    <div className="logo figure">
                      <a href="/#home" className="custom-logo-link" rel="home" aria-current="page">
                        <img src="/images/brand-logo/huzaif.png" className="image-main" height="80px" alt="Huzaif Mateen Logo" />
                        <img src="/images/brand-logo/huzaif-yellow.png" className="image-hover" height="80px" alt="Huzaif Mateen Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="menu-collapse-wrap">
                    <div className="hamburger-menu">
                      <button type="button" className="menu-collapsed" aria-label="Menu Collapsed">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                      </button>
                    </div>
                  </div>
                  <div className="main-mobile-wrapper">
                    <div id="mobile-menu-build" className="main-mobile-build">
                      <button type="button" className="header-close-menu close-style" aria-label="Header Close Menu"></button>
                    </div>
                    <div className="main-mobile-overlay" tabIndex="-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Up Button */}
        <div className="scrollingUp" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
