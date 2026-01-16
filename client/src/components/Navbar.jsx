import React, { useState } from 'react';
import { Menu, X, ShieldCheck, MessageCircle } from 'lucide-react';
// 1. Import your logo from the assets folder
import logo from '../assets/Gradelogo.jpeg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header" style={{ 
      backgroundColor: 'var(--bg-white)', 
      borderBottom: '1px solid var(--secondary-color)',
      position: 'sticky',
      top: 0,
      zIndex: 1000 
    }}>
      <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
        
        {/* 2. Logo Container updated with your Gradelogo.jpeg */}
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src={logo} 
            alt="GradeAlign Logo" 
            style={{ 
              height: '45px', // Adjusted height for a professional navbar look
              width: 'auto',
              borderRadius: '6px', // Optional: adds a slight smooth corner to the jpeg
              objectFit: 'contain'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="brand-text" style={{ 
              color: 'var(--primary-color)', 
              fontWeight: '800', 
              fontSize: '1.4rem',
              lineHeight: '1'
            }}>
              GradeAlign
            </span>
            {/* Added Slogan in the clinical green shade */}
            <span style={{ 
              fontSize: '0.65rem', 
              color: 'var(--primary-color)', 
              fontWeight: '600', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              marginTop: '2px'
            }}>
              Aligning Effort with Excellence
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', alignItems: 'center' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tutoring">Tutoring</a></li>
            <li><a href="#preceptors">Preceptors</a></li>
            
            <li style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={16} color="var(--primary-color)" />
              <a href="#army-hub" style={{ fontWeight: '600' }}>Army Hub</a>
            </li>
            
            <li><a href="#reviews">Reviews</a></li>

            <li>
              <a href="#contact" style={{ 
                backgroundColor: 'var(--primary-color)', 
                color: 'white', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                <MessageCircle size={18} /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{ backgroundColor: 'white', padding: '1rem', borderBottom: '1px solid var(--secondary-color)' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#tutoring" onClick={() => setIsOpen(false)}>Tutoring</a></li>
            <li><a href="#preceptors" onClick={() => setIsOpen(false)}>Preceptors</a></li>
            <li><a href="#army-hub" onClick={() => setIsOpen(false)}>Army Hub</a></li>
            <li><a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a></li>
            <li>
              <a href="#contact" 
                 onClick={() => setIsOpen(false)} 
                 style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
                Contact Alicia
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;