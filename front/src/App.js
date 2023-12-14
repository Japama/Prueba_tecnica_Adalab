import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.sass';

// Importa tus componentes
import PokemonList from './Pokemon/PokemonList';
import PokemonPage from './Pokemon/PokemonPage';
import PokemonDetails from "./Pokemon/PokemonDetail";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}>
          <PokemonPage>
            <Routes location={location}>
              <Route path="/pokemon/list" element={<PokemonList />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
          </PokemonPage>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
