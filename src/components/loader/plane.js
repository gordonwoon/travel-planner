import React from 'react';
import './plane.scss';

const PlaneLoader = () => {
  return (
    <div className="plane-loader plane-loader--active">
      <div className="plane-loader__circle">
        <div className="plane-loader__plane"></div>
        <div className="plane-loader__outer-tail"></div>
        <div className="plane-loader__inner-tail"></div>
      </div>
      <h3 className="plane-loader__title">Loading</h3>
    </div>
  )
}

export default PlaneLoader;
