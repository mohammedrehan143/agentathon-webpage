import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header>
      <div className="topbar">
        <div className="brand-left">
          <img className="logo-img bms-logo" src="/BMSIT&M-logo.svg" alt="BMSIT&M" />
        </div>
        <div className="brand-right">
          <div className="logo-sep"></div>
          <img className="logo-img iic-logo" src="/iiclogo.png" alt="IIC" />
          <div className="logo-sep"></div>
          <img className="logo-img epoch-logo" src="/EPOCH_SOCIETY-removebg-preview.png" alt="Epoch Society" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
