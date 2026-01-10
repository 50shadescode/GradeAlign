import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tutoringData } from '../tutoringData';
import * as LucideIcons from 'lucide-react';

const TutoringTabs = () => {
  const [activeTab, setActiveTab] = useState('nursing');

  // Dynamically render icons based on the name string in tutoringData.js
  const renderIcon = (iconName) => {
    const Icon = LucideIcons[iconName] || LucideIcons.PlusCircle;
    return <Icon size={20} />;
  };

  const activeCategory = tutoringData.find(t => t.id === activeTab);

  return (
    <section id="tutoring" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section Header - Text Updated Only */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', fontWeight: '700' }}>Tutoring & Mentorship</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Specialized academic alignment across multiple disciplines.
        </p>
      </div>

      <div className="tabs-container" style={{ display: 'flex', gap: '2.5rem', minHeight: '450px' }}>
        
        {/* Left Side: Vertical Navigation Tabs */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {tutoringData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                border: 'none',
                borderRadius: 'var(--border-radius)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1.05rem',
                fontWeight: '600',
                transition: 'var(--transition)',
                backgroundColor: activeTab === tab.id ? 'var(--primary-color)' : 'var(--bg-white)',
                color: activeTab === tab.id ? 'white' : 'var(--text-dark)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-md)' : 'none',
              }}
            >
              {renderIcon(tab.icon)}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Side: Content Area with Individual Mini-Cards */}
        <div style={{ 
          flex: '1', 
          backgroundColor: 'var(--bg-white)', 
          padding: '2.5rem', 
          borderRadius: 'var(--border-radius)', 
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--secondary-color)' 
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Sub-Header */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {activeCategory.label}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {activeCategory.description}
                </p>
              </div>

              {/* Subject Mini-Cards Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                gap: '1.25rem' 
              }}>
                {activeCategory.subjects.map((subject, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ 
                      y: -5, 
                      backgroundColor: 'var(--bg-white)',
                      boxShadow: '0 10px 15px -3px rgba(150, 123, 182, 0.2)' 
                    }}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'var(--secondary-color)',
                      border: '1px solid var(--accent-color)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      color: 'var(--primary-dark)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <LucideIcons.CheckCircle size={18} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                    {subject}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TutoringTabs;