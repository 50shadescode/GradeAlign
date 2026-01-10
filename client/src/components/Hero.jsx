import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      /* Updated Background: Premium Mint Tint */
      background: 'radial-gradient(circle at top right, #FFFFFF, #F4F8F8)', 
      padding: '8rem 2rem',
      textAlign: 'center',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="hero-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Trust Badge Top: Clinical Green theme */}
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '8px', 
          backgroundColor: 'rgba(17, 110, 110, 0.1)', // Soft Mint/Green background
          padding: '8px 20px', borderRadius: '50px', color: '#116E6E', 
          fontWeight: '700', fontSize: '0.9rem', marginBottom: '2rem' 
        }}>
          <ShieldCheck size={18} /> Trusted by Nursing & Military Students Worldwide
        </div>

        {/* Headlines: True Black for authority */}
        <h1 style={{ fontSize: 'var(--font-h1)', color: '#000000', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Academic Support That <br/>
          <span style={{ color: '#116E6E' }}>Adapts To Your Mission</span>
        </h1>
        
        <p style={{ fontSize: '1.3rem', color: '#1a1a1a', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
          I adapt my support to your schedule, pace, and learning style. Whether you’re on duty, deployed, or studying full-time. Aligning your effort with A-level quality results across Nursing, Business, and Multi-Disciplinary fields.
        </p>
        
        {/* Unified Primary CTA: Clinical Green */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <a href="#tutoring" style={{ 
            padding: '1.2rem 2.5rem', backgroundColor: '#116E6E', color: 'white', 
            textDecoration: 'none', borderRadius: '50px', fontWeight: '800', fontSize: '1.1rem',
            boxShadow: '0 10px 20px rgba(17, 110, 110, 0.2)', display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            Get Started <ChevronRight size={20} />
          </a>
          <a href="#orders" style={{ 
            padding: '1.2rem 2.5rem', backgroundColor: 'transparent', color: '#116E6E', 
            border: '2px solid #116E6E', borderRadius: '50px', fontWeight: '800', 
            fontSize: '1.1rem', textDecoration: 'none'
          }}>
            View Rates
          </a>
        </div>

        {/* Hero Trust Stats */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem', borderTop: '1px solid #E2E8F0', paddingTop: '3rem' 
        }}>
          <div style={statStyle}>
            <span style={statNumber}>500+</span>
            <span style={statLabel}>Students Supported</span>
          </div>
          <div style={statStyle}>
            <span style={statNumber}>10+ Years</span>
            <span style={statLabel}>Academic Excellence</span>
          </div>
          <div style={statStyle}>
            <span style={statNumber}>100%</span>
            <span style={statLabel}>Confidential Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Styles
const statStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const statNumber = { fontSize: '2.2rem', fontWeight: '800', color: '#000000' };
const statLabel = { fontSize: '0.9rem', color: '#444', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' };

export default Hero;