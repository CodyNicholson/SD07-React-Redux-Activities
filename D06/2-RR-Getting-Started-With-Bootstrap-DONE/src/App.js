import './App.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Nav fill variant="tabs" defaultActiveKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />

      <Container>
        <Form> 

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Form Dropdown with favorite movies</Form.Label>
            <Form.Control as="select">
              <option>Inception</option>
              <option>Forrest Gump</option>
              <option>Shawshank Redemption</option>
              <option>Spiderman: Into the Spiderverse</option>
              <option>Avengers: Endgame</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </Container>

      <Button variant="danger">Click Me!</Button>

    </div>
  );
}

export default App;
