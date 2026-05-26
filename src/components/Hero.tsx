import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          Epoch Society × BMSIT&M × IIC
        </div>
        <p className="hero-presenter">Epoch Society presents</p>
        <h1 className="hero-title">AGENTATHON</h1>
        <div className="hero-sub" id="schedule">A 2-Day Workshop + Hackathon</div>
        <div className="hero-divider"><span>✦</span></div>
        <p className="hero-tagline">Build the Future. Code the Intelligence.</p>
        <div className="hero-actions">
          <a className="btn-ghost" href="#about">Learn More</a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
