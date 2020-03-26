import React from 'react';

import ColorItem from '../color-item'
import './index.scss';

function ColorSwatch({ colors, updateColors }) {

  return (
    <ul>
      {colors.map((color, index) => {
        return <ColorItem 
        color={color} 
        index={index} 
        updateColors={updateColors} 
        key={index}/>
      })}
    </ul>
  )

}

export default ColorSwatch;