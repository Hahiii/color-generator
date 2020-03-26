import React from 'react';

import image from '../../assets/birds.png';
import './index.scss';

function EmptyColorSwatch() {
  return (
    <div className="image-container">
      <img src={image} alt="bird" />
      <h3>There are no colors yet.</h3>
    </div>
  )
}

export default EmptyColorSwatch;