import Cabecalho from "Components/Cabecalho";
import { Container } from "Components/Container";
import { Rodape } from "Components/Robape";
import FavoritosProvider from "Context/Favoritos";
import { Favoritos } from "pages/Favoritos";
import Inicio from "pages/inicio";
import { NaoEncontrada } from "pages/NaoEncontrada";
import { PaginaBase } from "pages/PaginaBase";
import { Player } from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
