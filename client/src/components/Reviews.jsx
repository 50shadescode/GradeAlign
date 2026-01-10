import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { 
    text: "The mentorship went beyond just editing. Alicia helped me understand the 'why' behind the rubric requirements. My GPA has never been higher.", 
    author: "MSN Graduate",
    tag: "Mentorship Focus"
  },
  { 
    text: "As a Business student in the Army, finding someone who understands military deadlines was key. Alicia is a true academic partner.", 
    author: "Active Duty Army (Business)",
    tag: "Army Support"
  },
  { 
    text: "I passed my capstone with flying colors! The alignment between my clinical goals and the final paper was seamless.", 
    author: "BSN Student",
    tag: "Nursing Excellence"
  },
  { 
    text: "Exceptional tutoring sessions. She breaks down complex leadership theories into actionable academic writing. Worth every penny.", 
    author: "Graduate Leadership Student",
    tag: "Tutoring Success"
  },
  { 
    text: "Fast, reliable, and confidential. Got an A on my DNP project despite a very tight duty schedule downrange.", 
    author: "DNP Candidate",
    tag: "Mission Ready"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h4 style={{ color: 'var(--primary-color)', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Testimonials
        </h4>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.5rem', fontWeight: '800', marginBottom: '4rem' }}>
          What Our Students Say
        </h2>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              style={{ 
                flex: '1 1 350px', 
                maxWidth: '380px', 
                backgroundColor: 'white', 
                padding: '2.5rem', 
                borderRadius: '24px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'relative',
                textAlign: 'left',
                border: '1px solid #eee'
              }}
            >
              <Quote size={40} color="var(--primary-color)" style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }} />
              
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(150, 123, 182, 0.1)', color: 'var(--primary-color)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                {review.tag}
              </div>

              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#E5C100" color="#E5C100" />)}
              </div>
              
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444', lineHeight: '1.6', fontSize: '1.05rem' }}>
                "{review.text}"
              </p>
              
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: '700', fontSize: '1rem' }}>
                - {review.author}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;