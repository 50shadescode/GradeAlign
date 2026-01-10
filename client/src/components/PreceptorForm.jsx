import React, { useState } from 'react';
import { Send, Lock, ShieldCheck, CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';

const PreceptorForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Nursing',
    level: 'Undergraduate',
    pages: '1',
    urgency: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pricing Logic based on your provided rates
    const baseRates = { "High School": 15, "Undergraduate": 25, "Master's": 28, "Doctorate": 35 };
    const calculatedTotal = baseRates[formData.level] * parseInt(formData.pages);

    // Constructing the WhatsApp Message structure you requested
    const message = `🚨 *NEW ALIGNMENT LEAD* 🚨\n\n` +
                    `*Student:* ${formData.name} / ${formData.email}\n` +
                    `*Discipline:* ${formData.discipline}\n` +
                    `*Academic Level:* ${formData.level}\n` +
                    `*Project Volume:* ${formData.pages} Page(s)\n` +
                    `*Deadline Urgency:* ${formData.urgency}\n` +
                    `*Base Estimated Price:* $${calculatedTotal}\n\n` +
                    `*Details:* ${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15125654603?text=${encodedMessage}`;

    // Open WhatsApp and show success UI
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="preceptors" style={{ padding: '6rem 2rem' }}>
        <div style={successCardStyle}>
          <div style={iconCircleStyle}><CheckCircle size={48} color="#116E6E" /></div>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: '1rem' }}>Request Initialized!</h2>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
            Your details have been compiled. Please ensure you send the pre-filled message in the WhatsApp window that just opened. Alicia will review it and respond within **24 hours**.
          </p>
          <button onClick={() => setSubmitted(false)} style={backButtonStyle}>
            <ArrowLeft size={18} /> Edit Details
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="preceptors" style={{ padding: '6rem 2rem', backgroundColor: '#fdfbff' }}>
      <div style={formContainerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={badgeStyle}><ShieldCheck size={20} /> Secure Placement Hub</div>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.5rem', fontWeight: '800' }}>Clinical & Academic Request</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Fill in your details below to generate a precision alignment quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={rowStyle}>
            <div className="group"><label style={labelStyle}>Full Name</label>
              <input type="text" name="name" onChange={handleChange} style={inputStyle} required /></div>
            <div className="group"><label style={labelStyle}>Email</label>
              <input type="email" name="email" onChange={handleChange} style={inputStyle} required /></div>
          </div>

          <div style={rowStyle}>
            <div className="group"><label style={labelStyle}>Discipline</label>
              <select name="discipline" onChange={handleChange} style={inputStyle}>
                <option>Nursing</option><option>Army/Military</option><option>Business</option><option>Social Sciences</option>
              </select></div>
            <div className="group"><label style={labelStyle}>Academic Level</label>
              <select name="level" onChange={handleChange} style={inputStyle}>
                <option>High School</option><option>Undergraduate</option><option>Master's</option><option>Doctorate</option>
              </select></div>
          </div>

          <div style={rowStyle}>
            <div className="group"><label style={labelStyle}>Page Count</label>
              <input type="number" name="pages" min="1" onChange={handleChange} style={inputStyle} placeholder="1" /></div>
            <div className="group"><label style={labelStyle}>Deadline/Urgency</label>
              <input type="text" name="urgency" onChange={handleChange} style={inputStyle} placeholder="e.g. 48 Hours / Jan 25" required /></div>
          </div>

          <div className="group">
            <label style={labelStyle}>Additional Requirements / Rubric Link</label>
            <textarea name="requirements" onChange={handleChange} style={{ ...inputStyle, minHeight: '100px' }}></textarea>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={submitButtonStyle}>
              <Send size={20} /> Send Secure Request
            </button>
            <div style={privacyNoteStyle}>
              <Lock size={16} color="#116E6E" />
              <span>Response within 24 hours. 100% confidential alignment.</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

// Styles
const formContainerStyle = { maxWidth: '850px', margin: '0 auto', backgroundColor: 'white', padding: '3.5rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f0e6ff' };
const rowStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' };
const labelStyle = { display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary-dark)', fontSize: '0.9rem' };
const inputStyle = { width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', backgroundColor: '#fcfcfc' };
const submitButtonStyle = { backgroundColor: 'var(--primary-color)', color: 'white', padding: '1rem 3rem', borderRadius: '50px', border: 'none', fontWeight: '700', fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(150, 123, 182, 0.2)' };
const badgeStyle = { display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.8rem' };
const privacyNoteStyle = { marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#666', fontSize: '0.85rem' };
const successCardStyle = { maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' };
const iconCircleStyle = { width: '100px', height: '100px', backgroundColor: '#F0F7F7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' };
const backButtonStyle = { background: 'none', border: 'none', color: '#888', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', margin: '0 auto' };

export default PreceptorForm;