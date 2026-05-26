import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="speaker-section reveal" id="speaker">
      <div className="speaker-img-wrap">
        <img src="/speaker.jpg" alt="Pranali Bose" />
      </div>
      <div className="speaker-body">
        <div className="speaker-tag">✦ Featured Speaker</div>
        <div className="speaker-name">Pranali Bose</div>
        <p className="speaker-bio">A Machine Learning Engineer at Apple with extensive experience in AI, Data Science, and Generative AI. Previously worked with leading companies including DBS, Walmart, Accenture, and Bosch, building impactful AI-driven solutions.</p>
        <div className="speaker-chips">
          <span className="chip">ML &amp; Data Engineering</span>
          <span className="chip">Generative AI Expert</span>
          <span className="chip">Scalable ML Systems</span>
          <span className="chip">NLP</span>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
