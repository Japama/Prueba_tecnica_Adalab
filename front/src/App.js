import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.sass';

// Importa tus componentes
import PokemonList from './Pokemon/PokemonList';
import PokemonPage from './Pokemon/PokemonPage';
import PokemonDetails from "./Pokemon/PokemonDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PokemonPage>
          <Routes>
            <Route path="/pokemon/list" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} /> 
          </Routes>
        </PokemonPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
