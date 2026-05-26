import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Who can participate?',
      answer: 'Any branch student interested in AI, coding, automation, startups, or problem-solving — beginners are welcome too.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No! Registration is completely free for all participants.',
    },
    {
      question: 'Do I need prior experience in AI?',
      answer: 'No. The workshop is designed to teach concepts step by step before the hackathon begins. Even if you are new to AI, you can follow along.',
    },
    {
      question: 'What happens after the hackathon?',
      answer: 'Top projects will be showcased, winners announced, and certificates provided for all participants.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section reveal" id="faq">
      <div className="section-header">
        <div className="section-badge">Got Questions?</div>
        <div className="section-title">FAQ</div>
        <div className="section-rule"></div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button 
              className="faq-btn" 
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div className="faq-body">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
