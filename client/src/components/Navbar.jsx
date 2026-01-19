import React, { useEffect, useState } from 'react';
import { Menu, X, ShieldCheck, MessageCircle } from 'lucide-react';
import logo from '../assets/Gradelogo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll when mobile menu is open + ESC to close
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Reusable styles for drawer links so they don't turn purple/underlined
  const drawerLinkStyle = {
    color: 'var(--primary-dark)',
    textDecoration: 'none',
    fontWeight: 600,
  };

  return (
    <nav
      className="header"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderBottom: '1px solid var(--secondary-color)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="header-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
        }}
      >
        {/* Logo */}
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={logo}
            alt="GradeAlign Logo"
            style={{
              height: '45px',
              width: 'auto',
              borderRadius: '6px',
              objectFit: 'contain',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="brand-text"
              style={{
                color: 'var(--primary-color)',
                fontWeight: '800',
                fontSize: '1.4rem',
                lineHeight: '1',
              }}
            >
              GradeAlign
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--primary-color)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginTop: '2px',
              }}
            >
              Aligning Effort with Excellence
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', alignItems: 'center', margin: 0, padding: 0 }}>
            <li><a href="#home" style={{ textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ textDecoration: 'none' }}>About</a></li>
            <li><a href="#tutoring" style={{ textDecoration: 'none' }}>Tutoring</a></li>
            <li><a href="#preceptors" style={{ textDecoration: 'none' }}>Preceptors</a></li>

            <li style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={16} color="var(--primary-color)" />
              <a href="#army-hub" style={{ fontWeight: '600', textDecoration: 'none' }}>Army Hub</a>
            </li>

            <li><a href="#reviews" style={{ textDecoration: 'none' }}>Reviews</a></li>

            <li>
              <a
                href="#contact"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={18} /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          style={{
            // IMPORTANT: when open, keep this below the drawer so it doesn't overlap ("XX")
            zIndex: isOpen ? 1001 : 1100,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay (tap outside closes) */}
      {isOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1050,
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 'min(80vw, 320px)',
          backgroundColor: 'white',
          padding: '1rem',
          borderLeft: '1px solid var(--secondary-color)',
          zIndex: 1060,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 200ms ease',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>Menu</strong>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              background: 'var(--bg-light)',
              border: '1px solid var(--secondary-color)',
              borderRadius: '12px',
              cursor: 'pointer',
              padding: '10px',
              lineHeight: 0,
            }}
          >
            <X />
          </button>
        </div>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginTop: '1.5rem',
            padding: 0,
          }}
        >
          <li><a href="#home" onClick={closeMenu} style={drawerLinkStyle}>Home</a></li>
          <li><a href="#about" onClick={closeMenu} style={drawerLinkStyle}>About</a></li>
          <li><a href="#tutoring" onClick={closeMenu} style={drawerLinkStyle}>Tutoring</a></li>
          <li><a href="#preceptors" onClick={closeMenu} style={drawerLinkStyle}>Preceptors</a></li>
          <li><a href="#army-hub" onClick={closeMenu} style={drawerLinkStyle}>Army Hub</a></li>
          <li><a href="#reviews" onClick={closeMenu} style={drawerLinkStyle}>Reviews</a></li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              style={{
                textDecoration: 'none',
                fontWeight: 700,
                color: 'var(--primary-color)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <MessageCircle size={18} /> Contact Alicia
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
