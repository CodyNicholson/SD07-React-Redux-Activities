import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

function App() {
  let [artId, setArtId] = useState(400);
  let [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(res => res.json())
      .then(jsonData => setData(jsonData))
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  }

  const displayImage = () => {
    if (!data.primaryImage) {
      return (
        <h2>No Image!</h2>
      )
    }
    return (
      <Gallery objectImg={data.primaryImage} alt={data.title} />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width':'100%'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
