import { Container, Stack } from "react-bootstrap";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";


export default function App() {
  const posts = [
    {
      id: 1,
      texto: "Olá mundo!",
      tempo: "1 minuto atrás",
      autor: {
        usuario: "Paulo",
        apelido: "Penadinho",
      },
    },
    {
      id: 2,
      texto: "Salve galera!",
      tempo: "2 minutos atrás",
      autor: {
        usuario: "Xunda",
        apelido: "Legalzão",
      },
    }
  ];


  return (
    <Container>
      <Cabecalho />

      <Container>


        <Stack direction="horizontal">
          <BarraLateral />

          <Container>
            {posts.length === 0 ?
              <p>Nenhuma postagem foi feita até o momento</p>
              :
              posts.map(post => {
                return (
                  <p key={post.id}>
                    <b>{post.autor.usuario}</b> - {post.tempo}
                    <br />
                    {post.texto}
                  </p>
                );
              })
            }

          </Container>

        </Stack>
      </Container>
    </Container>
  );
}
