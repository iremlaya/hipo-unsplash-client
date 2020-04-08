import React from 'react';
import './NoResult.css';

const NoResult = () => (
  <div className="not-found-container">
    <div className="not-found-wrapper">
      <span className="ghost" />
      <div className="not-found-text-container">
        <h2>No Results Were Found!</h2>
        <p className="not-found-subtext">Seems like you&apos;re too creative.</p>
      </div>

    </div>
  </div>
);


export default NoResult;
