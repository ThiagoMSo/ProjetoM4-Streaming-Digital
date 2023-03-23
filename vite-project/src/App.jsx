import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Biblioteca = lazy(() => import('./pages/Biblioteca/Biblioteca'));
const Playlist = lazy(() => import('./pages/Playlist/Playlist'));
const Cadastro = lazy(() => import('./pages/Cadastro/Cadastro'));
const PlayerPage = lazy(() => import('./pages/Player/PlayerPage'));



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/PlayerPage" element={<PlayerPage />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;