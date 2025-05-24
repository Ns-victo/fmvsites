import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseCliente'; // Ajuste o caminho se necessário


function Cliente() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [residencia, setResidencia] = useState('');
  const [cep, setCep] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('tabelaCliente')
      .insert([
        {
          nomeCliente: nome,
          cpfCliente: cpf,
          celular: celular,
          endereco: endereco,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          numeroResidencial: residencia,
          cep: cep,
        }
      ]);

    if (error) {
      console.error('Erro ao cadastrar cliente:', error.message);
      alert('Erro ao cadastrar cliente. Verifique o console para detalhes.');
    } else {
      alert(`Cliente ${nome} cadastrado com sucesso!`);
      // Limpa os campos
      setNome('');
      setCpf('');
      setCelular('');
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
      setResidencia('');
      setCep('');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={handleCadastro}>
          <div style={horizontalGroupStyle}>
            <input 
              type="text" 
              placeholder="Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input  
              type="text" 
              placeholder="CPF" 
              value={cpf} 
              onChange={(e) => setCpf(e.target.value)} 
              style={inputStyle} 
              required 
            />
            <input  
              type="text" 
              placeholder="Celular" 
              value={celular} 
              onChange={(e) => setCelular(e.target.value)} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input  
              type="text" 
              placeholder="Endereço" 
              value={endereco} 
              onChange={(e) => setEndereco(e.target.value)} 
              style={inputStyle} 
              required 
            />
            <input  
              type="text" 
              placeholder="Bairro" 
              value={bairro} 
              onChange={(e) => setBairro(e.target.value)} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input  
              type="text" 
              placeholder="Cidade" 
              value={cidade} 
              onChange={(e) => setCidade(e.target.value)} 
              style={inputStyle} 
              required 
            />
            <input  
              type="text" 
              placeholder="Estado" 
              value={estado} 
              onChange={(e) => setEstado(e.target.value)} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input  
              type="text" 
              placeholder="Número da Residência" 
              value={residencia} 
              onChange={(e) => setResidencia(e.target.value)} 
              style={inputStyle} 
              required 
            />
            <input  
              type="text" 
              placeholder="CEP" 
              value={cep} 
              onChange={(e) => setCep(e.target.value)} 
              style={inputStyle} 
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
  maxWidth: '600px'
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

export default Cliente;