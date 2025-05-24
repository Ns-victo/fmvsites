import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseCliente';

function ListaCliente() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClientes() {
      const { data, error } = await supabase
        .from('tabelaCliente')
        .select('*');
      if (error) {
        console.error('Erro ao buscar clientes:', error);
      } else {
        setClientes(data);
      }
    }
    fetchClientes();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Lista de Clientes</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Nome Cliente</th>
              <th style={thStyle}>CPF Cliente</th>
              <th style={thStyle}>Celular</th>
              <th style={thStyle}>Endereço</th>
              <th style={thStyle}>Bairro</th>
              <th style={thStyle}>Cidade</th>
              <th style={thStyle}>Número Residenciaal</th>
              <th style={thStyle}>CEP</th>
              <th style={thStyle}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((client) => (
              <tr key={client.id}>
                <td style={tdStyle}>{client.nomeCliente}</td>
                <td style={tdStyle}>{client.cpfCliente}</td>
                <td style={tdStyle}>{client.celular}</td>
                <td style={tdStyle}>{client.endereco}</td>
                <td style={tdStyle}>{client.bairro}</td>
                <td style={tdStyle}>{client.cidade}</td>
                <td style={tdStyle}>{client.numeroResidenciaal}</td>
                <td style={tdStyle}>{client.cep}</td>
                <td style={tdStyle}>{client.estado}</td>
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

export default ListaCliente;