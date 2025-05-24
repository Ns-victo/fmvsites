import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleOperacoesChange = (e) => {
    const value = e.target.value;
    if (value === 'gerar') {
      navigate('/gerarOS');
    } else if (value === 'fechar') {
      navigate('/finalizarOS');
    }
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={brandStyle}>fmv celulares</div>
        <div style={dropdownContainerStyle}>
          <div style={dropdownItemStyle}>
            <label style={dropdownLabelStyle}>Operações</label>
            <select style={dropdownStyle} onChange={handleOperacoesChange}>
              <option value="">Selecione...</option>
              <option value="gerar">Gerar OS</option>
              <option value="fechar">Fechar OS</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#094482',
  color: '#fff',
  padding: '10px 20px',
  height: '80px'
};

const brandStyle = {
  fontSize: '20px',
  fontWeight: 'bold'
};

const dropdownContainerStyle = {
  display: 'flex',
  gap: '20px'
};

const dropdownItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
};

const dropdownLabelStyle = {
  marginBottom: '5px',
  color: '#ccc',
  fontSize: '14px'
};

const dropdownStyle = {
  padding: '5px 10px',
  fontSize: '16px',
  backgroundColor: '#e0e0e0',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

export default Home;