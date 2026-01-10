import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '110px', right: '30px', zIndex: 3000 }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease-in-out'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#116E6E')} // Changes to Teal on hover
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
        >
          <ChevronUp size={28} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;