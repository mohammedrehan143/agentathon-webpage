import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const target = new Date('2026-05-29T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const pad = (n: number) => String(n).padStart(2, '0');

  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, target - Date.now());
      setTimeLeft({
        days: pad(Math.floor(d / 86400000)),
        hours: pad(Math.floor((d % 86400000) / 3600000)),
        minutes: pad(Math.floor((d % 3600000) / 60000)),
        seconds: pad(Math.floor((d % 60000) / 1000)),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="countdown-wrap reveal" id="countdown-section">
      <div className="cd-copy">
        <div className="cd-kicker">Countdown to Build Day</div>
        <div className="cd-title">29 May 2026<br />9:00 AM</div>
        <p className="cd-desc">The hackathon clock is ticking. Bring your team, sharpen your idea, and get ready to deploy intelligence.</p>
      </div>
      <div className="cd-grid" aria-live="polite">
        <div className="cd-box"><strong className="cd-num" id="days">{timeLeft.days}</strong><span className="cd-label">Days</span></div>
        <div className="cd-box"><strong className="cd-num" id="hours">{timeLeft.hours}</strong><span className="cd-label">Hours</span></div>
        <div className="cd-box"><strong className="cd-num" id="minutes">{timeLeft.minutes}</strong><span className="cd-label">Mins</span></div>
        <div className="cd-box"><strong className="cd-num" id="seconds">{timeLeft.seconds}</strong><span className="cd-label">Secs</span></div>
      </div>
    </div>
  );
};

export default Countdown;
