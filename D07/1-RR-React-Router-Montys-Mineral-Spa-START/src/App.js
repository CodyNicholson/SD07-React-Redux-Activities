import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <Container>
            <Nav defaultActiveKey="/" variant='tabs' fill>
              <Nav.Item>
                <Nav.Link href='/'>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"aboutPage"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"packagesPage"}>
                  <Link to="/packages">Our Packages</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;





