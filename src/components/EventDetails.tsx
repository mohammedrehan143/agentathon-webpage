import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section className="details-section reveal" id="prizes">
      <div className="section-header">
        <div className="section-badge">The Stakes</div>
        <div className="section-title">Event Details</div>
        <div className="section-rule"></div>
      </div>
      <div className="details-grid">
        <div className="prize-card">
          <div className="prize-badge">
            <div className="trophy-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0012 0V2z" /></svg>
            </div>
          </div>
          <div className="prize-label">Total Prize Pool</div>
          <div className="prize-amount">₹9,000</div>
          <div className="prize-free">FREE Registration</div>
        </div>
        <div className="info-card">
          <div className="info-title">Venue &amp; Schedule</div>
          <ul className="info-list">
            <li className="info-item">
              <span className="info-check">✓</span>
              <span><strong>Workshop Venue</strong><br />BSN Auditorium</span>
            </li>
            <li className="info-item">
              <span className="info-check">✓</span>
              <span><strong>Workshop Duration</strong><br />9:30 AM – 4:00 PM</span>
            </li>
            <li className="info-item">
              <span className="info-check">✓</span>
              <span><strong>Certificates</strong><br />For all participants</span>
            </li>
            <li className="info-item">
              <span className="info-check">✓</span>
              <span><strong>Teams</strong><br />Open to all branches</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
