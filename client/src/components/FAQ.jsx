import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "Is your service confidential?", a: "Absolutely! We maintain 100% confidentiality. Your information is never shared with third parties." },
    { q: "How do you ensure plagiarism-free work?", a: "Every assignment is written from scratch and verified with plagiarism detection software." },
    { q: "Can you help with Capella FlexPath or WGU?", a: "Yes, Alicia has extensive experience with competency-based assessments and rubrics." }
  ];

  return (
    <section id="faq" style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-light)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: '1rem', border: '1px solid var(--secondary-color)', borderRadius: '8px', backgroundColor: 'white' }}>
            <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: '600', color: 'var(--primary-dark)' }}>
              {faq.q}
              {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === idx && <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-light)', lineHeight: '1.6' }}>{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;