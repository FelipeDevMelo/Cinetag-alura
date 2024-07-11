import Cabecalho from "Components/Cabecalho";
import { Container } from "Components/Container";
import { Rodape } from "Components/Robape";
import { Favoritos } from "pages/Favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Container>n
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
