import React from 'react';
import { useNavigate } from 'react-router-dom';

// Dados de exemplo para os produtos
const produtos = [
  { id: 1, nome: 'Smartphone X', preco: 'R$ 1999,00', estoque: 10, tipo: 'Celular', modelo: 'X200', marca: 'Marca A' },
  { id: 2, nome: 'Notebook Y', preco: 'R$ 3999,00', estoque: 5, tipo: 'Computador', modelo: 'Y300', marca: 'Marca B' },
  { id: 3, nome: 'Tablet Z', preco: 'R$ 1499,00', estoque: 8, tipo: 'Tablet', modelo: 'Z100', marca: 'Marca C' },
];

function ListaProduto() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Lista de Produtos</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Nome</th>
              <th style={thStyle}>Preço</th>
              <th style={thStyle}>Estoque</th>
              <th style={thStyle}>Tipo</th>
              <th style={thStyle}>Modelo</th>
              <th style={thStyle}>Marca</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td style={tdStyle}>{produto.nome}</td>
                <td style={tdStyle}>{produto.preco}</td>
                <td style={tdStyle}>{produto.estoque}</td>
                <td style={tdStyle}>{produto.tipo}</td>
                <td style={tdStyle}>{produto.modelo}</td>
                <td style={tdStyle}>{produto.marca}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button onClick={() => navigate('/home')} style={backButtonStyle}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '800px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '10px',
};

const backButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#ccc',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ListaProduto;