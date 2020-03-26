import React from 'react';

import './index.scss';


function ColorItem({ color, index, updateColors }) {

  return (
    <li>
      <div className="color-box" style={{ background: `${color}` }}></div>
      <span>{`${color}`}</span>
      <a href="/#" onClick={() => updateColors(index)}>Remove color</a>
    </li >
  )
}

export default ColorItem;