'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const packagesData = [
  // ... (your packagesData array remains the same)
  {
    title: 'Start Smart Diagnostic',
    price: 'EGP 2,100 / $70',
    duration: '2 sessions',
    description: 'A comprehensive entry point to map out your success. Includes a baseline assessment, a detailed written plan, a timeline, a resource stack, and a weekly calendar. The second session is a dedicated Q&A and plan walkthrough.',
  },
  {
    title: 'Start Smart + Monthly Coaching',
    price: 'EGP 7,500 / $250',
    duration: 'Recurring',
    description: 'Our flagship offering for continuous support. This package includes the Start Smart Diagnostic plus four 45-minute coaching calls per month (or two 60-minute calls), weekly check-ins, and ongoing support via WhatsApp or email. You\'ll also receive an updated plan, a score trajectory, a habits tracker, and weekly tasks.',
  },
  {
    title: 'QBank Mastery Workshop',
    price: 'EGP 2,300 / $80',
    duration: '2 hours',
    description: 'A focused workshop to sharpen your test-taking skills. This live session includes problem-solving, an error taxonomy breakdown, timing drills, and homework to help you master question banks.',
  },
  {
    title: 'NBME Deep-Dive',
    price: 'EGP 2,300 / $80',
    duration: '1 exam',
    description: 'Get a meticulous review of a single NBME exam. We\'ll go through every question, helping you identify patterns and providing a targeted list of fixes to improve your score.',
  },
  {
    title: 'NBME Accelerator',
    price: 'EGP 4,100 / $145',
    duration: '2 exams',
    description: 'Bundle two NBME deep-dive sessions for a more extensive analysis. This package includes a written trend analysis and a micro-plan based on your performance to accelerate your progress.',
  },
  {
    title: 'Step Explainer',
    price: 'EGP 1,250 / $45',
    duration: 'Focus session',
    description: 'A one-on-one content deep-dive. This 60-90 minute tutorial focuses on a specific Step 1 or Step 2 topic, complete with annotated notes to help you master the material.',
  },
  {
    title: 'Med-School Concepts 1:1',
    price: 'EGP 950 / $35',
    duration: 'Course help',
    description: 'Personalized teaching on challenging med-school concepts. Each 60-minute session includes a mini-quiz and a take-home sheet to reinforce your learning.',
  },
  {
    title: 'Learning Style & Study Systems Audit',
    price: 'EGP 1,600 / $55',
    duration: 'Efficiency',
    description: 'Boost your efficiency with a custom study system. This 75-90 minute assessment helps you optimize your Anki, notes, and schedule, complete with a personalized checklist.',
  },
];

const Packages = () => {
  const router = useRouter();

  const handleBookSession = (title) => {
    const packageName = encodeURIComponent(title);
    router.push(`/?package=${packageName}#appoinment`);
  };

  return (
    <div className="container py-5">
      <style jsx>{`
        .card-blue {
          background-color: #112240; /* A nice shade of blue */
          color: white; /* Make text white for contrast */
        }
        .card-blue .text-muted {
          color: #e2e6ea !important; /* Lighter shade for muted text */
        }
      `}</style>
      <h1 className="text-center mb-5">Our Packages</h1>
      <div className="row">
        {packagesData.map((pkg, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100 card-blue">
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price: {pkg.price} Duration: {pkg.duration}</h6>
                <p className="card-text">{pkg.description}</p>
                <button
                  onClick={() => handleBookSession(pkg.title)}
                  // Change the className to use 'btn btn-main' or 'btn btn-main-2'
                  className="btn btn-main" 
                >
                  Book a session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;