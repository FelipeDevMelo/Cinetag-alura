import Cabecalho from "Components/Cabecalho";
import { Container } from "Components/Container";
import { Rodape } from "Components/Robape";
import FavoritosProvider from "Context/Favoritos";
import { Outlet } from "react-router-dom";

export const PaginaBase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
};
