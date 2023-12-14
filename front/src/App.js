import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.sass';

// Importa tus componentes
import PokemonList from './Pokemon/PokemonList';
import PokemonPage from './Pokemon/PokemonPage';
import PokemonCard from './Pokemon/PokemonCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <PokemonPage>
            <Routes>
              <Route path="/pokemon/list" element={<PokemonList />} />
              {/* <Route path="/pokemon/:id" element={<PokemonCard />} />  */}
            </Routes>
          </PokemonPage>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
