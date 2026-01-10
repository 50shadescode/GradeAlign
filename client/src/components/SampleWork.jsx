import React from 'react';
import { FileText, Table, Edit3, Lock, MessageCircle, Check } from 'lucide-react';

const SampleWork = () => {
  const samples = [
    {
      title: "NURS FPX 4005 Assessment Sample",
      icon: <FileText size={32} />,
      badge: "PNG",
      blurredContent: (
        <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#666' }}>
          <p style={{ fontWeight: 'bold', color: '#116E6E' }}>Diabetes Patient Education Session</p>
          <p><strong>Patient Name:</strong> Britney Martinez</p>
          <p><strong>Assessment Type:</strong> Health Promotion and Teaching</p>
          <p style={{ marginTop: '10px' }}><strong>Introduction:</strong> Diabetes is a chronic metabolic disorder. This educational session focuses on comprehensive management...</p>
        </div>
      ),
      lockText: "Full 8-page assessment available upon contact",
      cta: "Contact to View Full Paper"
    },
    {
      title: "Nursing Assessments Table",
      icon: <Table size={32} />,
      badge: "W",
      blurredContent: (
        <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#666' }}>
          <p style={{ fontWeight: 'bold', color: '#116E6E' }}>Comprehensive Assessment Reference Guide</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#E6F4F4', fontSize: '0.7rem' }}>
                <th style={{ border: '1px solid #ddd', padding: '4px' }}>Assessment Type</th>
                <th style={{ border: '1px solid #ddd', padding: '4px' }}>Key Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '4px' }}>Head-to-Toe</td>
                <td style={{ border: '1px solid #ddd', padding: '4px' }}>Neurological, Cardiovascular, Respiratory...</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      lockText: "Full reference document with all assessment types",
      cta: "Contact to View Full Document"
    },
    {
      title: "Leadership & Multi-Disciplinary Work",
      icon: <Edit3 size={32} />,
      badge: "NEW",
      blurredContent: (
        <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#666' }}>
          <p style={{ fontWeight: 'bold', color: '#116E6E', marginBottom: '10px' }}>Expanded Academic Portfolio:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}><Check size={12} color="#116E6E" /> Business Leadership & Strategy Papers</li>
            <li style={{ marginBottom: '8px' }}><Check size={12} color="#116E6E" /> Criminal Justice Case Studies</li>
            <li style={{ marginBottom: '8px' }}><Check size={12} color="#116E6E" /> DNP Capstone & Quality Improvement</li>
            <li style={{ marginBottom: '8px' }}><Check size={12} color="#116E6E" /> iHuman & Shadow Health Assessments</li>
          </ul>
        </div>
      ),
      lockText: "85% of military clients are supported across various disciplines",
      cta: "Request Discipline-Specific Samples"
    }
  ];

  const primaryWhatsApp = "15125654603";

  return (
    <section id="samples" style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#116E6E', fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
          Sample Papers & Work Quality
        </h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#116E6E', margin: '0 auto 20px' }}></div>
        <p style={{ color: '#666', marginBottom: '4rem', fontSize: '1.1rem' }}>
          Preview the high-caliber alignment provided for diverse academic tracks.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {samples.map((sample, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee'
            }}>
              <div style={{ backgroundColor: '#116E6E', padding: '1.5rem', color: 'white', position: 'relative' }}>
                <div style={{ marginBottom: '10px' }}>{sample.icon}</div>
                {sample.badge && <span style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.8 }}>{sample.badge}</span>}
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{sample.title}</h3>
              </div>

              <div style={{ padding: '2rem', position: 'relative', height: '320px', overflow: 'hidden' }}>
                <div style={{ filter: 'blur(5px)', opacity: 0.35, userSelect: 'none' }}>{sample.blurredContent}</div>
                <div style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <div style={{ color: '#116E6E', marginBottom: '1rem' }}><Lock size={44} /></div>
                  <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '220px' }}>
                    {sample.lockText}
                  </p>
                  <a href={`https://wa.me/${primaryWhatsApp}`} target="_blank" rel="noreferrer" style={{ 
                    backgroundColor: '#116E6E', color: 'white', padding: '0.8rem 1.5rem', 
                    borderRadius: '5px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem',
                    boxShadow: '0 4px 10px rgba(17,110,110,0.3)'
                  }}>
                    {sample.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button - Primary Line */}
      <a href={`https://wa.me/${primaryWhatsApp}`} target="_blank" rel="noreferrer" style={{
        position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366',
        color: 'white', width: '60px', height: '60px', borderRadius: '50%', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        boxShadow: '0 5px 15px rgba(37,211,102,0.4)', zIndex: 3000
      }}>
        <MessageCircle size={32} />
      </a>
    </section>
  );
};

export default SampleWork;