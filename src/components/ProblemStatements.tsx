import React from 'react';

const ProblemStatements: React.FC = () => {
  return (
    <section className="ps-section reveal" id="problem-statements">
      <div className="section-header">
        <div className="section-badge">Challenges</div>
        <div className="section-title">Problem Statements</div>
        <div className="section-rule"></div>
      </div>
      <div className="coming-soon-box">
        <div className="cs-lock">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
        </div>
        <div className="cs-title">OUT SOON</div>
        <p className="cs-sub">The ultimate challenges are being forged by industry experts.<br />Prepare your stack. The reveal is imminent.</p>
        <div className="cs-loader">
          <div className="cs-loader-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
