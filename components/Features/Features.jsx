'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0" data-aos="fade-up">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-graduate"></i>
                  </div>
                  <h3>Academic Excellence</h3>
                  <h4 className="mb-3">First of the class 4.0 GPA</h4>
                  <p className="mb-4">Achieving the top academic rank in a rigorous program is a testament to dedication and intellectual prowess. I graduated as the first of the class at New Giza University, a distinction that reflects my commitment to mastering medical sciences and my consistent pursuit of excellence.</p>
                </div>
                <div className="feature-item mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-checked"></i>
                  </div>
                  <h3>Standardized Test Scores</h3>
                  <h4 className="mb-3">USMLE step 2 score 271</h4>
                  <p className="mb-4">Standardized tests are a key component of the residency application process, and my performance on the USMLE demonstrates a strong command of clinical knowledge. A score of 271 is a significant achievement, placing me in the top tier of all test-takers and highlighting my readiness for the next phase of medical training.</p>
                </div>
                <div className="feature-item mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-stethoscope"></i>
                  </div>
                  <h3>U.S. Clinical Experience</h3>
                  <h4 className="mb-3">4 months clinical experience</h4>
                  <p className="mb-4">Gaining practical experience in the U.S. healthcare system is crucial for a smooth transition into residency. My four months of U.S. Clinical Experience (USCE) provided invaluable hands-on training, allowing me to become familiar with American medical practices, patient care protocols, and the nuances of working within multidisciplinary teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;