import './App.css';
import Feed from './Feed';

function App() {
  const styledText = {
    fontSize: "25px",
    margin: "40px",
    border: "1px solid green"
  }

  const s = {
    'color': 'red'
  }

  return (
    <div className="App">
      <h1 style={styledText}>Hello World</h1>
      <Feed s={s} />
    </div>
  );
}

export default App;
