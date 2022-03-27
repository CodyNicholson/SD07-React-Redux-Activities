import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Home() {
    return (
        <div className="homepage">
        {/*    <h1>Visit our resort and change your life!</h1>

                <h1>Grand opening in StressVille, Texas</h1>

                <h1>Check out our wide array of packages and offers!</h1> */}
            <Container>
                <Jumbotron>
                    <h1>Visit our resort and change your life!</h1>
                    <h1>Grand opening in StressVille, Texas</h1>
                    <h1>Check out our wide array of packages and offers!</h1>
                </Jumbotron>
            </Container>
        </div>

    )

}