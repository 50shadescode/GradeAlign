import React, { useState } from 'react';
import { Send, Clock, CreditCard, Lock, Zap } from 'lucide-react';

const AssignmentPortal = () => {
  const [hoverTier, setHoverTier] = useState(null);

  // Exact rates based on academic level
  const rates = [
    { level: "High School", price: "15", desc: "Foundational alignment for general tasks." },
    { level: "Undergraduate", price: "23", desc: "Degree-level research & assignment support." },
    { level: "Master's", price: "28", desc: "Advanced analysis for graduate-level papers." },
    { level: "Doctorate", price: "35", desc: "Specialized DNP & PhD project alignment." }
  ];

  // Delivery Heatmap Data
  const deliveryTiers = [
    { 
      label: "Standard", time: "4+ Days", color: "#F0F7F7", border: "#116E6E", text: "#116E6E",
      desc: "Lowest base rates. Ideal for deep research and thorough alignment." 
    },
    { 
      label: "Priority", time: "2-3 Days", color: "#116E6E", border: "#116E6E", text: "#FFFFFF",
      desc: "Moderate adjustment for speed. Quick turnaround for active course weeks." 
    },
    { 
      label: "Urgent", time: "< 48 Hours", color: "#000000", border: "#000000", text: "#FFFFFF",
      desc: "Custom rush rates. Immediate resource priority for mission-critical deadlines." 
    }
  ];

  return (
    <section id="orders" style={{ padding: '6rem 2rem', backgroundColor: '#F4F8F8' }}> {/* Premium Mint Tint Background */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: '#000', fontSize: 'var(--font-h2)', fontWeight: '800' }}>
            Assignment Rates & Investment
          </h2>
          <p style={{ color: '#444', fontSize: '1.2rem', marginTop: '10px', lineHeight: '1.8' }}>
            Transparent per-page pricing. Total cost aligns with volume and urgency.
          </p>
        </div>

        {/* Pricing Grid - White cards popping against Mint background */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {rates.map((rate, i) => (
            <div key={i} style={rateCardStyle}>
              <h3 style={rateHeaderStyle}>{rate.level}</h3>
              <div style={priceStyle}>
                ${rate.price}<span style={pageLabelStyle}>/page</span>
              </div>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>{rate.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Graphical Urgency Heatmap */}
          <div style={urgencyContainerStyle}>
            <h4 style={{ color: '#000', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800' }}>
              <Clock size={24} color="#116E6E" /> Delivery & Urgency Timeline
            </h4>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
              {deliveryTiers.map((tier, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoverTier(index)}
                  onMouseLeave={() => setHoverTier(null)}
                  style={{
                    flex: 1, padding: '1.5rem 0.5rem', backgroundColor: tier.color,
                    border: `2px solid ${tier.border}`, borderRadius: '16px', textAlign: 'center',
                    transition: 'transform 0.2s ease', transform: hoverTier === index ? 'translateY(-5px)' : 'none',
                    cursor: 'default',
                    boxShadow: hoverTier === index ? '0 10px 20px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: tier.text, marginBottom: '5px' }}>{tier.label}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '800', color: tier.text }}>{tier.time}</div>
                </div>
              ))}
            </div>

            <div style={detailBoxStyle}>
              <p style={{ margin: 0, color: '#116E6E', fontWeight: '700', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} /> 
                {hoverTier !== null ? deliveryTiers[hoverTier].desc : "Hover over a tier to see delivery details"}
              </p>
              <div style={pricingRuleStyle}>
                <strong>Pricing Rule:</strong> Total = (Base Rate × Pages) + Urgency Premium.
              </div>
            </div>
          </div>

          {/* Action Hub */}
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: '#000', fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>
              Ready to align your project?
            </h3>
            <p style={{ color: '#444', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Submit your rubric via WhatsApp for a precision quote. Alicia provides custom quotes within 30 minutes to ensure your mission stays on track.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="https://wa.me/15125654603" target="_blank" rel="noreferrer" style={primaryCTA}>
                <Send size={20} /> 1. Get Precision Quote
              </a>
              <button style={secondaryCTA} onClick={() => window.open('https://buy.stripe.com/example', '_blank')}>
                <CreditCard size={20} /> 2. Proceed to Secure Payment
              </button>
            </div>

            <div style={trustFooterStyle}>
              <Lock size={16} /> Secure Encrypted Payment | Academic Integrity Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Styles updated for Premium Mint Background
const rateCardStyle = { 
  padding: '3.5rem 2rem', 
  borderRadius: '24px', 
  border: '1px solid #E2E8F0', 
  textAlign: 'center', 
  backgroundColor: '#FFFFFF', // Pure White pops against Mint Tint
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
};
const rateHeaderStyle = { fontSize: '1.15rem', color: '#116E6E', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em' };
const priceStyle = { fontSize: '3.5rem', fontWeight: '800', color: '#000', marginBottom: '1rem' };
const pageLabelStyle = { fontSize: '1.2rem', fontWeight: '400', color: '#888' };
const urgencyContainerStyle = { padding: '2.5rem', backgroundColor: '#FFFFFF', borderRadius: '30px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' };
const detailBoxStyle = { backgroundColor: '#F0F7F7', padding: '1.8rem', borderRadius: '20px', borderLeft: '6px solid #116E6E', minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const pricingRuleStyle = { marginTop: '15px', fontSize: '0.9rem', color: '#444', borderTop: '1px dotted #116E6E', paddingTop: '12px' };
const primaryCTA = { backgroundColor: '#116E6E', color: 'white', padding: '1.3rem 2.5rem', borderRadius: '50px', textDecoration: 'none', textAlign: 'center', fontWeight: '800', fontSize: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(17, 110, 110, 0.2)' };
const secondaryCTA = { backgroundColor: '#000', color: 'white', padding: '1.3rem 2.5rem', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' };
const trustFooterStyle = { marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.8, fontSize: '0.95rem', fontWeight: '700', color: '#000' };

export default AssignmentPortal;