import {Navbar, Container} from "react-bootstrap";


export default function Cabecalho() {
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Navbar.Brand>Microblog do Manseira</Navbar.Brand>
            </Container>
        </Navbar>
    );
}