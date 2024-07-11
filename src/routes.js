import Cabecalho from "Components/Cabecalho";
import { Rodape } from "Components/Robape";
import { Favoritos } from "pages/Favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
