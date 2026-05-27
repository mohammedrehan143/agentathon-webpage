import React from 'react';

const Highlights: React.FC = () => {
  return (
    <section id="events" className="highlights-section">
      <div className="section-header reveal">
        <div className="section-badge">What to Expect</div>
        <div className="section-title">Event Highlights</div>
        <div className="section-rule"></div>
      </div>
      <div className="hl-grid">
        <article className="hl-card reveal">
          <div className="hl-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h3M16 3h3a2 2 0 012 2v14a2 2 0 01-2 2h-3M12 8v8M9 11l3-3 3 3" /></svg>
          </div>
          <div className="hl-title">Workshop</div>
          <p className="hl-text">Hands-on workshop to build your foundation in AI agents from scratch.</p>
        </article>
        <article className="hl-card reveal reveal-delay-1">
          <div className="hl-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9.5 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V9.5L14.5 3H9.5z" /><path d="M14 3v6.5H20.5M9 13h6M9 17h4" /></svg>
          </div>
          <div className="hl-title">Hackathon</div>
          <p className="hl-text">Build intelligent agents and solve real-world challenges competitively.</p>
        </article>
        <article className="hl-card reveal reveal-delay-2">
          <div className="hl-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
          </div>
          <div className="hl-title">Collaborate</div>
          <p className="hl-text">Work in teams, share ideas, and innovate together.</p>
        </article>
        <article className="hl-card reveal reveal-delay-3">
          <div className="hl-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
          </div>
          <div className="hl-title">Showcase</div>
          <p className="hl-text">Present your solution to expert judges and win exciting prizes.</p>
        </article>
      </div>
    </section>
  );
};

export default Highlights;
