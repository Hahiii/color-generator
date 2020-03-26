import React, { useEffect } from 'react';

import ColorItem from '../color-item'
import './index.scss';

function ColorSwatch({ colors, updateColors }) {
  useEffect(() => {
    localStorage.setItem("colorSwatch", JSON.stringify(colors));
    // let colorSwatch = localStorage.getItem("colorSwatch");
    // console.log("hii", JSON.parse(colorSwatch));
    // colorSwatch = JSON.parse(colorSwatch)
    // setColors(colorSwatch);
    // console.log(colors);
  }, []);
  
  return (
    <ul>
      {colors.map((color, index) => {
        return <ColorItem
          color={color}
          index={index}
          updateColors={updateColors}
          key={index} />
      })}
    </ul>
  )

}

export default ColorSwatch;