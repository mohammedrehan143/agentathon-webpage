import React from 'react';

const Countdown: React.FC = () => {
  return (
    <section className="finale-section reveal">
      <div className="finale-card">
        <div className="celebration-glow"></div>
        <div className="finale-content">
          <div className="finale-badge">
            <span className="badge-icon">✨</span>
            Mission Accomplished
          </div>
          <h2 className="finale-title">
            AGENTATHON 2026<br />
            <span className="gradient-text">SUCCESSFULLY CONCLUDED</span>
          </h2>
          <div className="finale-divider"></div>
          <p className="finale-message">
            Intelligence has been deployed. We are incredibly proud of all the innovators 
            who joined us to build the future of AI agents.
          </p>
          <div className="finale-stats">
            <div className="stat-item">
              <span className="stat-val">2</span>
              <span className="stat-lab">Days</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">48</span>
              <span className="stat-lab">Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">∞</span>
              <span className="stat-lab">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
