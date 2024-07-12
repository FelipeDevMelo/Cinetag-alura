import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setfavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setfavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavorito(novoFavorito) {
  const { favorito, setFavorito } = useContext(FavoritosContext);
  function adcionarFavorito() {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );
    let novaLista = [...favorito];
    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
  }

  return {
    favorito,
    adcionarFavorito,
  };
}
