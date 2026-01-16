import React from 'react';
import { Mail, MessageCircle, ShieldCheck, Globe, Users, ArrowRight } from 'lucide-react';
// Import the same logo used in your Navbar
import logo from '../assets/Gradelogo.jpeg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '5rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        
        {/* Brand & Integrity Focus - UPDATED WITH LOGO */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img 
              src={logo} 
              alt="GradeAlign Logo" 
              style={{ 
                height: '45px', 
                width: 'auto', 
                borderRadius: '6px', 
                objectFit: 'contain' 
              }} 
            />
            <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: 'white' }}>GradeAlign</h3>
          </div>
          <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Aligning your academic journey with A-level results. We provide multidisciplinary support designed for professionals.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#116E6E', fontSize: '0.85rem', fontWeight: '700' }}>
            <ShieldCheck size={18} /> Academic Integrity Focused
          </div>
        </div>

        {/* Who We Help Section */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: '#116E6E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Who We Help</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.9 }}>
            <li style={whoHelpStyle}><Users size={16} /> Nursing (BSN, MSN, DNP)</li>
            <li style={whoHelpStyle}><Globe size={16} /> Army Students (All Disciplines)</li>
            <li style={whoHelpStyle}><Users size={16} /> Business & Leadership Majors</li>
            <li style={whoHelpStyle}><Users size={16} /> Graduate Researchers</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: '#116E6E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#home" style={linkStyle}>Home</a></li>
            <li><a href="#about" style={linkStyle}>Meet Your Partner</a></li>
            <li><a href="#tutoring" style={linkStyle}>Tutoring & Mentorship</a></li>
            <li><a href="#orders" style={linkStyle}>Assignment Rates</a></li>
            <li><a href="#contact" style={{ ...linkStyle, color: '#116E6E', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Book a Consultation <ArrowRight size={14} />
            </a></li>
          </ul>
        </div>

        {/* Contact Hubs Section */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: '#116E6E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Contact Hubs</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={contactBlockStyle}>
              <a href="https://wa.me/15125654603" target="_blank" rel="noreferrer" style={waLinkStyle}>
                <MessageCircle size={18} color="#25D366" /> +1 (512)-565-4603
              </a>
              <span style={emailLabelStyle}>aliciaharrell437@gmail.com</span>
            </div>
            <div style={contactBlockStyle}>
              <a href="https://wa.me/12135792290" target="_blank" rel="noreferrer" style={waLinkStyle}>
                <MessageCircle size={18} color="#25D366" /> +1 (213)-579-2290
              </a>
              <span style={emailLabelStyle}>gradealignhub@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.6, fontSize: '0.85rem' }}>
        © {currentYear} GradeAlign with Alicia. All rights reserved. | Professional Academic Alignment
      </div>
    </footer>
  );
};

const whoHelpStyle = { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' };
const linkStyle = { color: 'white', opacity: 0.8, textDecoration: 'none', transition: 'opacity 0.2s', fontSize: '0.95rem' };
const contactBlockStyle = { display: 'flex', flexDirection: 'column', gap: '0.3rem' };
const waLinkStyle = { display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' };
const emailLabelStyle = { opacity: 0.6, fontSize: '0.8rem', paddingLeft: '26px' };

export default Footer;