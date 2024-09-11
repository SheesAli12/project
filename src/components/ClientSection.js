import React, { useEffect, useRef } from 'react';

const ClientSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const duplicateContent = () => {
      if (scrollContainer) {
        const originalContent = scrollContainer.innerHTML;
        scrollContainer.innerHTML += originalContent;
      }
    };

    const handleScroll = () => {
      if (scrollContainer) {
        const containerWidth = scrollContainer.scrollWidth / 2;
        const scrollLeft = scrollContainer.scrollLeft;
        const containerClientWidth = scrollContainer.clientWidth;

        // Reset scroll position to avoid jump
        if (scrollLeft >= containerWidth) {
          scrollContainer.scrollLeft = scrollLeft - containerWidth;
        }
      }
    };

    duplicateContent();

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: 200, // Adjust this value based on your logo width and margin
          behavior: 'smooth',
        });
        handleScroll(); // Check scroll position and adjust if necessary
      }
    }, 2000); // Scroll every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="client-section1" className="client-section py-5" style={{ backgroundColor: '#202020' }}>
      <div className="container-fluid pt-4">
        <div className="row pt-4">
          <div className="col-12 mx-lg-auto mb-5 text-center">
            <div className="heading-default wow fadeInUp">
              <span className="badge badge-secondary text-primary">Explore</span>
              <h2 className="text-orange mb-4">
                <span className="text-shadow-black">Our Clients</span>
              </h2>
              <div className="rowClient">
                <section className="client-logos" ref={scrollRef}>
                  <div className="slide"><img src="/clients-data/logos/1.png" alt="Client 1" /></div>
                  <div className="slide"><img src="/clients-data/logos/2.png" alt="Client 2" /></div>
                  <div className="slide"><img src="/clients-data/logos/3.png" alt="Client 3" /></div>
                  <div className="slide"><img src="/clients-data/logos/4.png" alt="Client 4" /></div>
                  <div className="slide"><img src="/clients-data/logos/5.png" alt="Client 5" /></div>
                  <div className="slide"><img src="/clients-data/logos/6.png" alt="Client 6" /></div>
                  <div className="slide"><img src="/clients-data/logos/7.png" alt="Client 7" /></div>
                  <div className="slide"><img src="/clients-data/logos/8.png" alt="Client 8" /></div>
                  <div className="slide"><img src="/clients-data/logos/9.png" alt="Client 9" /></div>
                  <div className="slide"><img src="/clients-data/logos/10.png" alt="Client 10" /></div>
                  <div className="slide"><img src="/clients-data/logos/11.png" alt="Client 11" /></div>
                  <div className="slide"><img src="/clients-data/logos/12.png" alt="Client 12" /></div>
                  <div className="slide"><img src="/clients-data/logos/13.png" alt="Client 13" /></div>
                  <div className="slide"><img src="/clients-data/logos/14.png" alt="Client 14" /></div>
                  <div className="slide"><img src="/clients-data/logos/15.png" alt="Client 15" /></div>
                  <div className="slide"><img src="/clients-data/logos/17.png" alt="Client 17" /></div>
                  <div className="slide"><img src="/clients-data/logos/18.png" alt="Client 18" /></div>
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
      <div className="shape2"><img src="/images/page-design-assets/clipart-2/shape2.png" alt="shape2" /></div>
      <div className="shape3"><img src="/images/page-design-assets/clipart-2/shape3.png" alt="shape3" /></div>
      <div className="shape4"><img src="/images/page-design-assets/clipart-2/shape4.png" alt="shape4" /></div>
      <div className="shape5"><img src="/images/page-design-assets/clipart-2/shape5.png" alt="shape5" /></div>
    </section>
  );
};

export default ClientSection;
