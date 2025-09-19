"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Appoinment = () => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    email: '',
    service: '',
    name: '',
    phone: '',
    message: '',
    preferredContact: '',
  });

  const [status, setStatus] = useState('');

  // This useEffect will run whenever the searchParams change.
  useEffect(() => {
    const selectedPackage = searchParams.get('package');
    if (selectedPackage) {
      setFormData(prevState => ({
        ...prevState,
        service: decodeURIComponent(selectedPackage),
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Appointment request sent successfully! We will contact you shortly.');
        setFormData({ email: '', service: '', name: '', phone: '', message: '', preferredContact: '' }); // Clear new field on success
      } else {
        setStatus('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <section className="section appoinment" id='appoinment'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="appoinment-content d-flex flex-column align-items-center">
                <img src="/images/logo.jpg" alt="" className="img-fluid" style={{ maxWidth: '300px', marginBottom: '15px' }} />
                <div>
                  <h2 className="text-md text-break"><i className="icofont icofont-envelope-open"></i> zamentorship@gmail.com</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book Appointment</h2>
                <p className="mb-4">The process of booking an appointment is simple. Just fill out the form below, and we'll get back to you shortly through your preferred contact method.</p>
                <form id="#" className="appoinment-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="email" id="email" type="email" className="form-control" placeholder="Your Email" onChange={handleChange} value={formData.email} required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect2" name="service" onChange={handleChange} value={formData.service} required>
                          <option value="">Select Package</option>
                          <option>Start Smart Diagnostic</option>
                          <option>Start Smart + Monthly Coaching</option>
                          <option>QBank Mastery Workshop</option>
                          <option>NBME Deep-Dive</option>
                          <option>NBME Accelerator</option>
                          <option>Step Explainer</option>
                          <option>Med-School Concepts 1:1</option>
                          <option>Learning Style & Study Systems Audit</option>
                        </select>
                      </div>
                    </div>
                    {/* New dropdown for preferred contact method */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="preferredContact"
                          onChange={handleChange}
                          value={formData.preferredContact}
                          required
                        >
                          <option value="">Preferred Contact Method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone Number</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" onChange={handleChange} value={formData.name} required />
                      </div>
                    </div>
                    {/* Conditional rendering for the phone field */}
                    {formData.preferredContact === 'phone' && (
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="phone"
                            id="phone"
                            type="number"
                            className="form-control"
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={formData.phone}
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message (optional)" onChange={handleChange} value={formData.message}></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-main btn-round-full" disabled={status === 'Sending...'}>
                      {status || 'Make Appointment'} <i className="icofont icofont-simple-right ml-2"></i>
                    </button>
                    {status && <p className="mt-3">{status}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appoinment;