import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // your logic goes here!

  return (
    <div className="App">
      <div>
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <input onChange={(e) => { }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
    </div>
  );
}

export default App;
