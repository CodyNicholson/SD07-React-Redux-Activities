import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Our Packages</Card.Title>
                        <Card.Text>
                            Check out some of our packages!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        {displayPackages}
                    </ListGroup>
                </Card>
            </Container>
        </div>
    )
}