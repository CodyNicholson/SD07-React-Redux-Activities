import './App.css';
import React, { useState } from 'react';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';

function App() {
  let [colors, setColors] = useState(["green", "violet", "red", "yellow"]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} key={i} />
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
