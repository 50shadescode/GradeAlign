import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    discipline: 'Nursing',
    subject: 'General Mentorship Inquiry',
    message: ''
  });

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    
    // Structured message for Alicia's context
    const text = `🚨 *NEW GENERAL INQUIRY* 🚨\n\n` +
                 `*Student:* ${contactData.name}\n` +
                 `*Email:* ${contactData.email}\n` +
                 `*Discipline:* ${contactData.discipline}\n` +
                 `*Topic:* ${contactData.subject}\n\n` +
                 `*Message:* ${contactData.message}`;

    const whatsappUrl = `https://wa.me/15125654603?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.8rem', fontWeight: '800' }}>Start Your Alignment</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginTop: '1rem' }}>
            Reach out for personalized tutoring, mentorship, or general academic questions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Form with Success State Logic */}
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f0e6ff' }}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleWhatsAppInquiry} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                >
                  <input 
                    type="text" placeholder="Full Name" required style={inputStyle}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})} 
                  />
                  <input 
                    type="email" placeholder="Email Address" required style={inputStyle}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})} 
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <select style={inputStyle} onChange={(e) => setContactData({...contactData, discipline: e.target.value})}>
                      <option>Nursing</option><option>Army/Military</option><option>Business</option><option>Social Sciences</option>
                    </select>
                    <select style={inputStyle} onChange={(e) => setContactData({...contactData, subject: e.target.value})}>
                      <option>General Mentorship</option><option>Tutoring Request</option><option>Pricing Question</option>
                    </select>
                  </div>
                  <textarea 
                    placeholder="How can Alicia help you align your goals?" required 
                    style={{...inputStyle, height: '120px', resize: 'none'}}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                  ></textarea>
                  
                  <button type="submit" style={submitBtn}>
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </button>
                  <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center' }}>
                    <ShieldCheck size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 
                    Secure & Confidential Inquiry
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <div style={iconCircleStyle}><CheckCircle size={40} color="#25D366" /></div>
                  <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>Lead Initialized</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Your alignment details have been compiled. Please send the message in the WhatsApp window that opened. Alicia typically responds within 30 minutes.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={resetBtn}>Send Another Inquiry</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Info & Response Promise */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', padding: '1rem' }}>
            <div>
              <h4 style={subHeaderStyle}>Response Time</h4>
              <p style={infoTextStyle}>
                <Clock size={20} color="var(--primary-color)" /> Typical response within 30 minutes.
              </p>
            </div>
            
            <div>
              <h4 style={subHeaderStyle}>Email Support</h4>
              <a href="mailto:aliciaharrell437@gmail.com" style={contactLink}>
                <Mail size={20} /> Aliciaharrell437@gmail.com
              </a>
              <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '8px' }}>
                Best for Capella FlexPath, WGU rubrics, or 50+ page projects.
              </p>
            </div>

            <div>
              <h4 style={subHeaderStyle}>Alternate Hub</h4>
              <a href="https://wa.me/12135792290" style={contactLink}>
                <MessageCircle size={20} /> +1 (213)-579-2290
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Styles
const inputStyle = { padding: '1rem', borderRadius: '12px', border: '1px solid #e0e0e0', fontSize: '1rem', backgroundColor: '#fcfcfc', outlineColor: 'var(--primary-color)', width: '100%' };
const submitBtn = { backgroundColor: '#25D366', color: 'white', padding: '1.2rem', borderRadius: '50px', border: 'none', fontWeight: '800', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(37,211,102,0.2)' };
const infoTextStyle = { display: 'flex', alignItems: 'center', gap: '12px', color: '#444', fontWeight: '600', fontSize: '1.1rem' };
const subHeaderStyle = { color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.8rem' };
const contactLink = { display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-dark)', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' };
const iconCircleStyle = { width: '80px', height: '80px', backgroundColor: '#F0FFF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' };
const resetBtn = { background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '0.85rem', marginTop: '1.5rem', textDecoration: 'underline' };

export default Contact;