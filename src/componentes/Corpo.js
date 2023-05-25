import { Container, Stack  } from "react-bootstrap";
import BarraLateral from "./BarraLateral";

export default function Corpo({menu,children}) {
    return (
        <Container>
            <Stack direction="horizontal" className="Body">
                {menu && <BarraLateral/>}
                <Container className="Content">
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}