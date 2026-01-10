import React from 'react';
import { Send, MessageSquare, PenTool, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: <Send size={32} />, title: "Submit Requirements", desc: "Contact Alicia via WhatsApp or the form with your assignment or tutoring needs." },
    { icon: <MessageSquare size={32} />, title: "Get a Quote", desc: "Receive a fair, transparent quote within 30 minutes. Alicia offers student-friendly rates." },
    { icon: <PenTool size={32} />, title: "Expert Support", desc: "Alicia begins working on your alignment immediately, keeping you updated throughout." },
    { icon: <CheckCircle size={32} />, title: "Achieve Excellence", desc: "Receive your work or complete your session with confidence. Free revisions included." }
  ];

  return (
    <section id="how-it-works" style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>How It Works</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '4rem' }}>A simple 4-step process to align your grades with your goals.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ position: 'relative', padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--border-radius)', border: '1px solid var(--secondary-color)' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '40px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {idx + 1}
              </div>
              <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;