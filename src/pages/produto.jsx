import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseCliente';

function Produto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [tipo, setTipo] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [numSerie, setNumSerie] = useState('');
  const [cor, setCor] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('produtos')  // Nome da tabela
      .insert([
        {
          nomeProduto: nome,
          precoProduto: preco,
          estoque: estoque,
          tipo: tipo,
          modelo: modelo,
          marca: marca,
          numSerie: numSerie,
          cor: cor,
          descricaoProduto: descricaoProduto
        }
      ]);

    if (error) {
      console.error('Erro ao cadastrar produto:', error.message);
      alert('Erro ao cadastrar produto. Verifique o console para detalhes.');
    } else {
      alert(`Produto ${nome} cadastrado com sucesso!`);
      // Limpa os campos
      setNome('');
      setPreco('');
      setEstoque('');
      setTipo('');
      setModelo('');
      setMarca('');
      setNumSerie('');
      setCor('');
      setDescricaoProduto('');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Cadastro de Produto</h2>
        <form onSubmit={handleCadastro}>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Preço do Produto"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="number"
              placeholder="Estoque"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Número de Série"
              value={numSerie}
              onChange={(e) => setNumSerie(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Cor"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <textarea
              placeholder="Descrição do Produto"
              value={descricaoProduto}
              onChange={(e) => setDescricaoProduto(e.target.value)}
              style={textAreaStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Cadastrar</button>
        </form>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '90%',
  maxWidth: '1200px'
};

const horizontalGroupStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px'
};

const inputStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const textAreaStyle = {
  flex: '1',
  width: '100%',
  height: '80px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#094482',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px'
};

const backButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#ccc',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px'
};

export default Produto;