import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


export default function About() {
    return (
        // <div className="aboutpage">
        //     <div className="aboutHeader">
        //         <h1>About Us</h1>
        //     </div>
        //     <p>When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown. </p>
        //     <p>As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired. </p>
        //     <p>Monty decided to travel around the world to find peace and happiness</p>
        //     <p>Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others</p>
        //     <img src="hotsprings.jpg" alt="hotsprings" />I 
        // </div>
        <div className="aboutPage">
            <Container>
                <Card border="info">
                    <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown.
                        </Card.Text>
                        <Card.Text>
                            As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired.
                        </Card.Text>
                        <Card.Text>
                            Monty decided to travel around the world to find peace and happiness
                        </Card.Text>
                        <Card.Text>
                            Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others
                        </Card.Text>
                    </Card.Body>
                    <Card.Img style={{ width: '50%', margin: '0 auto'}} variant="bottom" src="hotsprings.jpg" />
                </Card>
            </Container>
        </div>
    )
}