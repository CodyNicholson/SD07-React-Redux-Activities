import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => 
        <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <div className="packages">
            {/* <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div> */}
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Our Packages</Card.Title>
                        <Card.Text>
                           Check out some of our packages! Every package is ethically sourced and organic!
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