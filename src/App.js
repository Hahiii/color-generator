import React, { useState } from 'react';

import ColorSwatch from './components/color-swatch';
import EmptyColorSwatch from './components/empty-color-swatch';
import './App.scss';

function App() {
  const [colors, setColors] = useState([]);

  const updateColors = (toRemoveIndex) => {
    setColors(colors.filter(color => colors.indexOf(color) !== toRemoveIndex))
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
    setColors([color, ...colors])
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
