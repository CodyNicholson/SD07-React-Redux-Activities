import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher';

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = (e) => {
    setRocketName(e.target.value)
  }

  return (
    <main>
      <h1>{rocketName}</h1>
           <button onClick={() => setLaunch(!launch)}>
             { launch ? "Abort Rocket Launch" : "Start Rocket Launch" }
           </button>
      { launch ? <RocketLauncher/> : null }
      <input type="text" onChange={handleChange} />
    </main>
  );
}

export default App;