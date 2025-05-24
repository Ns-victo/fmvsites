import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Produto from './pages/Produto';
import GerarOS from './pages/GerarOS';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/gerarOS" element={<GerarOS />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);