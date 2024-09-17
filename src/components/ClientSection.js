import React, { useEffect, useRef } from 'react'

const slides = [
  {
    id: 1,
    image: '/clients-data/logos/1.png',
  },
  {
    id: 2,
    image: '/clients-data/logos/2.png',
  },
  {
    id: 3,
    image: '/clients-data/logos/3.png',
  },
  {
    id: 4,
    image: '/clients-data/logos/4.png',
  },
  {
    id: 5,
    image: '/clients-data/logos/5.png',
  },
  {
    id: 6,
    image: '/clients-data/logos/6.png',
  },
  {
    id: 7,
    image: '/clients-data/logos/7.png',
  },
  {
    id: 8,
    image: '/clients-data/logos/8.png',
  },
  {
    id: 9,
    image: '/clients-data/logos/9.png',
  },
  {
    id: 10,
    image: '/clients-data/logos/10.png',
  },
  {
    id: 11,
    image: '/clients-data/logos/11.png',
  },
]

const ClientSection = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    const duplicateContent = () => {
      if (scrollContainer) {
        const originalContent = scrollContainer.innerHTML
        scrollContainer.innerHTML += originalContent
      }
    }

    const handleScroll = () => {
      if (scrollContainer) {
        const containerWidth = scrollContainer.scrollWidth / 2
        const scrollLeft = scrollContainer.scrollLeft
        const containerClientWidth = scrollContainer.clientWidth

        // Reset scroll position to avoid jump
        if (scrollLeft >= containerWidth) {
          scrollContainer.scrollLeft = scrollLeft - containerWidth
        }
      }
    }

    duplicateContent()

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: 200, // Adjust this value based on your logo width and margin
          behavior: 'smooth',
        })
        handleScroll() // Check scroll position and adjust if necessary
      }
    }, 2000) // Scroll every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <section
      id="client-section1"
      className="client-section py-5"
      style={{ backgroundColor: '#00291B' }}
    >
      <div className="container-fluid pt-4">
        <div className="row pt-4">
          <div className="col-12 mx-lg-auto mb-5 text-center">
            <div className="heading-default wow fadeInUp">
              <span className="badge badge-secondary">Explore</span>
              <h2 className="text-orange mb-4">
                <span className="text-shadow-black">Our Clients</span>
              </h2>
              <div className="rowClient">
                <section className="client-logos" ref={scrollRef}>
                  {slides.map((slide) => (
                    <div
                      key={slide.id}
                      className="slide"
                      style={{
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '10px',
                      }}
                    >
                      <img src={slide.image} alt={`Client ${slide.id}`} />
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-12 mx-lg-auto">
            <div className="row row-cols-1 row-cols-md-4 g-4 wow fadeInUp"></div>
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

export default ClientSection
