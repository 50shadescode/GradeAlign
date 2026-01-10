import React, { useState } from 'react';
import { Menu, X, GraduationCap, ShieldCheck, MessageCircle } from 'lucide-react';

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
      <div className="header-container">
        <div className="logo-container">
          <GraduationCap size={32} color="var(--primary-color)" />
          <span className="brand-text" style={{ color: 'var(--primary-color)' }}>GradeAlign</span>
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

            {/* Styled Contact Button for Desktop */}
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
            {/* Added Contact to Mobile Menu for Responsiveness */}
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