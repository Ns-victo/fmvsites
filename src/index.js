import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Produto from './pages/produto';
import GerarOS from './pages/GerarOS';
import FinalizarOS from './pages/FinalizarOS';
import ListaCliente from './pages/ListaCliente';
import ListaProduto from './pages/ListaProduto';
import ListaosAberto from './pages/ListaosAberto';
import ListaosFinalizada from './pages/ListaosFinalizada';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

/*root.render(
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
);*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/gerarOS" element={<GerarOS />} />
        <Route path="/finalizarOS" element={<FinalizarOS />} />
        <Route path="/listaCliente" element={<ListaCliente />} />
        <Route path="/ListaProduto" element={<ListaProduto />} />
        <Route path="/listaosAberto" element={<ListaosAberto />} />
        <Route path="/ListaosFinalizada" element={<ListaosFinalizada />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);