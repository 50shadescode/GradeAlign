import React from 'react';
import { Shield, Target, Clock, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const ArmyHub = () => {
  const benefits = [
    { 
      icon: <Shield size={32} />, 
      title: "Duty-First Flexibility", 
      desc: "Academic alignment that shifts with your service—deployments, training exercises, and duty cycles." 
    },
    { 
      icon: <Briefcase size={32} />, 
      title: "Multi-Disciplinary Support", 
      desc: "Specialized guidance for Business, Leadership, Criminal Justice, and General Education degrees." 
    },
    { 
      icon: <Clock size={32} />, 
      title: "24/7 Global Access", 
      desc: "Support designed for the soldier downrange or at home station, regardless of time zone." 
    },
    { 
      icon: <Award size={32} />, 
      title: "Mission-Oriented Results", 
      desc: "A-level outcomes to advance your military career (NCOER/OER) and civilian marketability." 
    }
  ];

  return (
    <section id="army-hub" style={{ 
      backgroundColor: '#FFFFFF', 
      color: '#000000', 
      padding: '8rem 2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h4 style={{ 
            color: '#116E6E', 
            fontWeight: '800', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            marginBottom: '1rem',
            fontSize: '0.9rem' 
          }}>
            Mission-Critical Support
          </h4>
          <h2 style={{ fontSize: '3.2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#000000' }}>
            The Army Student Hub
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8', color: '#444444' }}>
            85% of our military clients excel in diverse disciplines beyond nursing. Alicia aligns your service discipline—from Leadership to Business—with elite academic standards.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              style={{ 
                padding: '3.5rem 2.5rem', 
                backgroundColor: '#F4F8F8', // Premium Mint Shade
                borderRadius: '24px',
                border: '1px solid #116E6E33', // Subtle Green Border
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div style={{ color: '#116E6E', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {benefit.icon}
              </div>

              {/* Title updated to Clinical Green for consistency */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', color: '#116E6E' }}>
                {benefit.title}
              </h3>
              
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#555555' }}>
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Partnership Box */}
        <div style={{ 
          marginTop: '6rem', 
          padding: '4rem 3rem', 
          backgroundColor: '#F4F8F8', // Green Shade background
          borderRadius: '32px', 
          textAlign: 'center',
          border: '2px dashed #116E6E'
        }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#116E6E', fontSize: '1.8rem', fontWeight: '800' }}>
            Strategic Academic Partnership
          </h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#000000', fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.8' }}>
            "Whether you are home or downrange, our mission is to ensure you have equitable access to high-quality academic support that respects your service schedule and discipline-specific goals."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArmyHub;