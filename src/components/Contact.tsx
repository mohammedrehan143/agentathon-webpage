import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-card">
        <div className="contact-heading">Contact</div>
        <div className="contact-item">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
          </div>
          <div className="contact-info">
            <strong>Rishika</strong>
            <span>7975376850</span>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
          </div>
          <div className="contact-info">
            <strong>Mohammed Rehan</strong>
            <span>9019631104</span>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </div>
          <div className="contact-info">
            <strong>Email</strong>
            <span>epochsociety@bmsit.in</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
