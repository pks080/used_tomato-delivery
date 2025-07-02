import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div className='app-download-left'>
        <img className="admin-img" src={assets.admin} alt='admin' />
      </div>
      <div className='app-download-right'>
        <p className='pforbetter'>
          For Better Experience <br /> Download ProfitBin App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Play Store" />
          <img src={assets.app_store} alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
