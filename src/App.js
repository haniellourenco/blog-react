import { Container  } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Corpo from "./componentes/Corpo";
import Posts from "./componentes/Posts";
import Feed from "./paginas/Feed";
import Login from "./paginas/Login";
import Busca from "./paginas/Busca";

export default function App() {


  return (
    <Container fluid className="App">

      <BrowserRouter>
        <Cabecalho/>

        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/busca' element={<Busca/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/perfil' element={<Feed/>} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>

    </Container>
  );
}
