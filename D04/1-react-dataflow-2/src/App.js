import './App.css';
import { useEffect, useState } from 'react';
import DisplayIdeas from './components/DisplayIdeas';
import IdeasForm from './components/IdeasForm';

function App() {
  let [ideas, setIdeas] = useState([
    "Movie about radioactive mole rat",
    "Romcom about two employees on Zoom calls",
    "Horror film where AWS goes down"
  ])

  const addIdeas = newIdea => {
    setIdeas([...ideas, newIdea]);
  }

  return (
    <div className="App">
      <h1>Welcome to Super Awesome Movie Think Tank!</h1>
      <DisplayIdeas ideas={ideas} />
      <h1>Submit your own ideas!</h1>
      <IdeasForm addIdeas={addIdeas} />
    </div>
  );
}

export default App;