'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <section className="banner" id='heroBanner'>
        <div className="container">
          <div className="row align-items-center">
            {/* Animate the text and button section */}
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                {/* Animate the divider with a fade-in effect */}
                <div className="divider mb-3" data-aos="fade-in"></div>
                
                {/* Animate the first text line from the left */}
                <span className="text-uppercase text-sm letter-spacing" data-aos="fade-right" data-aos-delay="200">Professional Care For Your Health</span>
                
                {/* Animate the main heading from the left with a slight delay */}
                <h1 className="mb-3 mt-3" data-aos="fade-right" data-aos-delay="400">Good Health Moves Us Forward</h1>
                
                {/* Animate the paragraph from the left with a greater delay */}
                <p className="mb-4 pr-5" data-aos="fade-right" data-aos-delay="600">Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your holistic well-being, nurturing both your mental and physical health with meticulous care.</p>
                
                {/* Animate the button from the bottom */}
                <div className="btn-container" data-aos="fade-up" data-aos-delay="800">
                  <a href="#appoinment" className="btn btn-main-2 btn-icon btn-round-full">Make appointment
                    <i className="icofont icofont-simple-right ml-2"></i></a>
                </div>
              </div>
            </div>
            
            {/* Animate the image from the right */}
            <div className="col-lg-6 col-md-12 col-xl-5">
              <div className="block" data-aos="fade-left" data-aos-delay="500">
                <img src="/images/bg/USMLE.png" alt="Description of the image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;