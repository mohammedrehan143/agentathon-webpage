import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <article className="card reveal">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <div className="card-title">About Agentathon</div>
          <p className="card-text">A 2-day immersive workshop and hackathon bringing together innovators, coders, and AI enthusiasts to build intelligent agents that solve real-world problems. Blending learning, building, and competing to spark innovation.</p>
        </article>
        <article className="card card-center reveal reveal-delay-1">
          <div className="card-big-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h2M14 14h2M8 18h2M14 18h2" /></svg>
          </div>
          <div className="card-date">27th &amp; 29th<br />May 2026</div>
        </article>
        <article className="card card-center reveal reveal-delay-2">
          <div className="card-big-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          </div>
          <div className="card-date">9:00 AM –<br />4:00 PM</div>
        </article>
      </div>
    </section>
  );
};

export default About;
