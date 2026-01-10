import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import TutoringTabs from './components/TutoringTabs';
import AssignmentPortal from './components/AssignmentPortal'; // New: Rate Card & Order Tab
import SampleWork from './components/SampleWork'; 
import HowItWorks from './components/HowItWorks';
import PreceptorForm from './components/PreceptorForm';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ArmyHub from './components/ArmyHub'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        {/* 1. Hero: Entry point */}
        <div id="home">
          <Hero />
        </div>

        {/* 2. Meet your lead Ac. partner: Alicia to compose her description here */}
        <AboutMe />

        {/* 3. Tutoring & Mentorship: Renamed for "soul-appeal" per client feedback */}
        <section id="tutoring" className="tutoring-tracks">
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', paddingTop: '4rem' }}>
            <h2 style={{ color: '#116E6E', fontSize: '2.5rem', fontWeight: '700' }}>
              Tutoring & Mentorship
            </h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              Academic excellence across Nursing, Business, and Multi-Disciplinary fields.
            </p>
          </div>
          <TutoringTabs />
        </section>

        {/* 4. NEW: Assignment Portal & Rate Card */}
        <div id="orders">
          <AssignmentPortal />
        </div>

        {/* 5. Proof of Quality: Teal Blurred Sample Papers */}
        <SampleWork />

        {/* 6. Operations: Process and Clinical Portals */}
        <HowItWorks />
        <PreceptorForm />

        {/* 7. Credibility: Reviews and FAQs */}
        <Reviews />
        <FAQ />

        {/* 8. Army Hub: Discipline-Neutral for 85% Non-Nursing Military Clients */}
        <ArmyHub />

        {/* 9. Conversion: Contact with Alicia's updated details */}
        <Contact />
      </main>

      <Footer />
      <ScrollToTop /> 
    </div>
  );
}

export default App;