import React from 'react';
import { useNavigate } from 'react-router-dom';

const osFinalizadas = [
  { id: 1, numero: 'OS-101', cliente: 'Silvia Costa', status: 'Finalizada', dataFinalizacao: '2025-04-15' },
  { id: 2, numero: 'OS-102', cliente: 'Bruno Lima', status: 'Finalizada', dataFinalizacao: '2025-04-16' },
  { id: 3, numero: 'OS-103', cliente: 'Aline Dias', status: 'Finalizada', dataFinalizacao: '2025-04-17' },
];

function ListaosFinalizada() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Lista de Ordens de Serviço Finalizadas</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Número da OS</th>
              <th style={thStyle}>Cliente</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Data de Finalização</th>
            </tr>
          </thead>
          <tbody>
            {osFinalizadas.map((os) => (
              <tr key={os.id}>
                <td style={tdStyle}>{os.numero}</td>
                <td style={tdStyle}>{os.cliente}</td>
                <td style={tdStyle}>{os.status}</td>
                <td style={tdStyle}>{os.dataFinalizacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  width: '90%',
  maxWidth: '800px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px'
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left'
};

const backButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#ccc',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default ListaosFinalizada;