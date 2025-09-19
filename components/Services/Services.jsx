import React from 'react';

const Services = () => {
  return (
    <>
      <section className="section service gray-bg" id='services'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Services</h2>
                <div className="divider mx-auto my-4"></div>
                <p>Comprehensive Healthcare Services with Zeyad Attala</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-graduate-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">USMLE Mentorship</h4>
                </div>
                <div className="content">
                  {/* The <p> tag has been removed */}
                  <ul className="list-unstyled">
                    <li className="mb-2">Personalized study plans tailored to your strengths and weaknesses.</li>
                    <li className="mb-2">Guidance on NBME performance, Qbank strategy, and high-yield resources.</li>
                    <li className="mb-2">Step 1 & Step 2 tutoring, explanations, and test-taking skills.</li>
                    <li className="mb-2">Score improvement strategies from a proven high scorer.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-student-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">Medical School Mentorship</h4>
                </div>
                <div className="content">
                  {/* The <p> tag has been removed */}
                  <ul className="list-unstyled">
                    <li className="mb-2">Concept explanation sessions for challenging subjects.</li>
                    <li className="mb-2">Learning style assessment and building efficient study systems.</li>
                    <li className="mb-2">Coaching for exams, clinical rotations, and research involvement.</li>
                    <li className="mb-2">Step-by-step guidance on excelling in medical school coursework.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-7 text-center">
              <a href="/Packages" className="btn btn-main-2 btn-round-full">
                Learn more about the packages
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;