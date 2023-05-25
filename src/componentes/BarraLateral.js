import {Navbar, Nav} from "react-bootstrap";

export default function BarraLateral() {
    return (

        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link href="/">Feed</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/perfil">Perfil</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/busca">Buscar</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            
        </Navbar>

    );
}
