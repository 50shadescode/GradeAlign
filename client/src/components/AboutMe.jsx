import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import aliciaPhoto from '../assets/hero.jpeg'; 

const AboutMe = () => {
  return (
    /* Updated Background: Premium Mint Tint for a high-authority feel */
    <section id="about" style={{ padding: '6rem 2rem', backgroundColor: '#F4F8F8' }}> 
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        
        {/* Left Side: Professional Imagery & Authority Badge */}
        <div style={{ flex: '1 1 450px', position: 'relative' }}>
          <div style={{ 
            borderRadius: '30px', 
            overflow: 'hidden', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#ffffff' 
          }}>
            <img 
              src={aliciaPhoto} 
              alt="Alicia - Lead Academic Partner" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
          
          {/* Credentials Badge: Clinical Green */}
          <div style={{ 
            position: 'absolute', 
            bottom: '30px', 
            left: '-20px', 
            backgroundColor: '#116E6E', 
            color: 'white', 
            padding: '1.5rem', 
            borderRadius: '20px', 
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{ display: 'flex', gap: '0.7rem' }}>
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>RN</span>
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>MSN</span>
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>PhD Candidate</span>
            </div>
            <span style={{ fontSize: '0.9rem', opacity: '0.95', fontWeight: '600', letterSpacing: '0.05em' }}>
              Lead Academic Partner
            </span>
          </div>
        </div>

        {/* Right Side: Professional Story - UPDATED WITH PROVIDED TEXT */}
        <div style={{ flex: '1 1 500px' }}>
          <h4 style={{ color: '#116E6E', fontWeight: '800', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Mentorship & Excellence
          </h4>
          
          <h2 style={{ fontSize: '2.8rem', color: '#000000', marginBottom: '1.5rem', lineHeight: '1.2', fontWeight: '800' }}>
            Meet Your Lead Academic Partner
          </h2>
          
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '2.5rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I specialize in providing <strong>reliable, student-focused academic support for nursing and army students</strong>, 
              while also supporting learners pursuing other college and university disciplines. My services include 
              personalized tutoring, structured assignments guidance, study support, and assistance with finding 
              qualified preceptors for required clinical or Practicum experiences.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I fully understand the discipline, time demands, and the high standards required in pursuing academic programs. 
              Primarily, my approach is centered on <strong>ethical academic practices and practical learning strategies</strong> that warrants long-term success.
            </p>

            <p>
              I work closely with students to ensure they stay organized, meet their program expectations, and 
              progress successfully in their academic & professional goals.
            </p>
          </div>

          {/* Core Competencies */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <Award color="#116E6E" size={26} />
              </div>
              <div>
                <h5 style={{ fontWeight: '800', color: '#000000', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Academic Support</h5>
                <p style={{ fontSize: '0.95rem', color: '#444' }}>Reliable guidance across nursing and university disciplines.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <BookOpen color="#116E6E" size={26} />
              </div>
              <div>
                <h5 style={{ fontWeight: '800', color: '#000000', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Ethical Success</h5>
                <p style={{ fontSize: '0.95rem', color: '#444' }}>Practical strategies focused on long-term professional goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;