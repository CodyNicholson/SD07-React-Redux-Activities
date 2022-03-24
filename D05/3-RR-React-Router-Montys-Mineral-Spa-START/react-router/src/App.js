
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <a href={<Home />}>Home</a>
            </li>
            <li>
              <a href={<About />}>About Us</a>
            </li>
            <li>
              <a href={<Packages packages={packages}/>}>Our Packages</a>
            </li>
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;





