import React, { useState, useEffect } from 'react';

import ColorSwatch from './components/color-swatch';
import EmptyColorSwatch from './components/empty-color-swatch';
import './App.scss';

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    let colorSwatch = localStorage.getItem("colorSwatch");
    if (JSON.parse(colorSwatch)) {
      setColors([...JSON.parse(colorSwatch)]);
    }
    // eslint-disable-next-line
  }, []);

  const updateColors = (toRemoveIndex) => {
    let updatedColorSwatch = colors.filter(color => colors.indexOf(color) !== toRemoveIndex);

    setColors(updatedColorSwatch);
    localStorage.setItem("colorSwatch", JSON.stringify(updatedColorSwatch));
  };

  const addColor = () => {
    let rendomeNr = () => {
      let hexColor = Math.floor(Math.random() * 255).toString(16)
      if (hexColor.length === 2) {
        return hexColor;
      }
      return rendomeNr();
    };
    let color = `#${rendomeNr()}${rendomeNr()}${rendomeNr()}`;

    setColors([color, ...colors]);
    localStorage.setItem("colorSwatch", JSON.stringify([color, ...colors]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Color Generator
        </h1>
      </header>
      {colors.length ?
        <ColorSwatch
          colors={colors}
          updateColors={updateColors}
        /> : <EmptyColorSwatch />

      }
      <footer>
        <button onClick={() => addColor()}>Create color</button>
      </footer>
    </div>
  );
}

export default App;
