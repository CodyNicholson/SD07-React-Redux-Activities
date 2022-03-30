import React from "react"
import Card from "react-bootstrap/Card"
import MickeyMouse from './Mickey_Mouse.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={MickeyMouse} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Mickey Mouse</Card.Title>
            <Card.Text>
            I am a cartoon character and am one of the world's most recognizable fictional characters.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard