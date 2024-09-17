import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import useMediaQuery from './MediaQuery'

const Header = () => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false)
  const location = useLocation()
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Up logic
      if (window.scrollY > 200) {
        document.querySelector('.scrollingUp').classList.add('is-active')
      } else {
        document.querySelector('.scrollingUp').classList.remove('is-active')
      }

      // Sticky Header logic
      if (window.scrollY >= 250) {
        document.querySelector('.is-sticky-on').classList.add('is-sticky-menu')
      } else {
        document
          .querySelector('.is-sticky-on')
          .classList.remove('is-sticky-menu')
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header id="main-header" className="main-header">
      <div className="navigation-wrapper" style={{ minHeight: '100px' }}>
        {/* Main Desktop Navigation */}
        <div className="main-navigation-area d-none d-lg-block">
          <div className="main-navigation is-sticky-on">
            <div className="container">
              <div className="row">
                <div className="col-2 my-auto">
                  <div
                    className="logo figure"
                    style={{
                      padding: '3px',
                    }}
                  >
                    <Link
                      to="/"
                      className="custom-logo-link"
                      rel="home"
                      aria-current="page"
                    >
                      <img
                        src="/images/brand-logo/huzaif.png"
                        className="image-main"
                        height="80px"
                        alt="Huzaif Mateen Logo"
                      />
                      <img
                        src="/images/brand-logo/huzaif-yellow.png"
                        className="image-hover"
                        height="80px"
                        alt="Huzaif Mateen Logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-10 my-auto">
                  <nav className="navbar-area" id="navbar-area">
                    <div className="main-navbar">
                      <ul id="menu-navigation" className="main-menu nav">
                        <li className={`menu-item nav-item ${isActive('/')}`}>
                          <Link title="home" to="/#home" className="nav-link">
                            Home
                          </Link>
                        </li>
                        <li
                          className={`menu-item nav-item ${isActive(
                            '/contact-us',
                          )}`}
                        >
                          <Link
                            title="Contact"
                            to="/contact-us"
                            className="nav-link"
                          >
                            Contact Us
                          </Link>
                        </li>

                        <li
                          className={`menu-item nav-item ${isActive('/about')}`}
                        >
                          <Link
                            title="About Us"
                            to="/about"
                            className="nav-link"
                          >
                            About Us
                          </Link>
                        </li>

                        <li
                          className="menu-item nav-item"
                          onMouseEnter={() => setIsCatalogueOpen(true)}
                          onMouseLeave={() => setIsCatalogueOpen(false)}
                        >
                          <a title="Catalogue" href={'#'} className="nav-link">
                            Our Catalogue
                          </a>
                          {isCatalogueOpen && (
                            <ul className="submenu">
                              <li>
                                <Link to="/catalogue/dental-equipments">
                                  Dental Equipment
                                </Link>
                              </li>
                              <li>
                                <Link to="/catalogue/surgical-equipments">
                                  Surgical Equipment
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        {isSmallScreen && (
                          <>
                            <li className={`menu-item nav-item mx-3`}>
                              <Link to="/catalogue/dental-equipments">
                                Dental Equipment
                              </Link>
                            </li>
                            <li className={`menu-item nav-item mx-3`}>
                              <Link to="/catalogue/surgical-equipments">
                                Surgical Equipment
                              </Link>
                            </li>
                          </>
                        )}
                        <li
                          className={`menu-item nav-item ${
                            !isSmallScreen && 'x-3'
                          }`}
                          style={{ borderLeft: '2px solid white ' }}
                        >
                          <Link
                            title="Get a Quote"
                            to="/contact-us"
                            className="nav-link"
                            style={{ color: 'white', fontWeight: 'bold' }}
                          >
                            Get a Free Quote!
                          </Link>
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
                      <Link
                        to="/"
                        className="custom-logo-link"
                        rel="home"
                        aria-current="page"
                      >
                        <img
                          src="/images/brand-logo/huzaif.png"
                          className="image-main"
                          height="80px"
                          alt="Huzaif Mateen Logo"
                        />
                        <img
                          src="/images/brand-logo/huzaif-yellow.png"
                          className="image-hover"
                          height="80px"
                          alt="Huzaif Mateen Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="menu-collapse-wrap">
                    <div className="hamburger-menu">
                      <button
                        type="button"
                        className="menu-collapsed"
                        aria-label="Menu Collapsed"
                      >
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                      </button>
                    </div>
                  </div>
                  <div className="main-mobile-wrapper">
                    <div id="mobile-menu-build" className="main-mobile-build">
                      <button
                        type="button"
                        className="header-close-menu close-style"
                        aria-label="Header Close Menu"
                      ></button>
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
  )
}

export default Header
