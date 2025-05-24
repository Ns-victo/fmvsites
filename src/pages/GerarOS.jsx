import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseCliente';
import jsPDF from 'jspdf';

function GerarOS() {
  const [cliente, setCliente] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [servico, setServico] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numeroResidencial, setNumeroResidencial] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const navigate = useNavigate();

  const handleGerarOS = async (e) => {
    e.preventDefault();

    const osData = {
      nome: cliente,
      endereco,
      bairro,
      cidade,
      numResidencial: numeroResidencial,
      complemento,
      cep,
      estado,
      descricaoServico: descricao,
      data,
      hora: horario,
      servico,
    };

    const { data: insertedData, error } = await supabase
      .from('geraros')
      .insert([osData]);

    if (error) {
      console.error('Erro ao gerar OS:', error.message);
      alert('Erro ao gerar OS. Verifique o console para detalhes.');
    } else {
      alert(`OS gerada para ${cliente} com sucesso!`);
      // Limpa os campos
      setCliente('');
      setEndereco('');
      setBairro('');
      setCidade('');
      setNumeroResidencial('');
      setComplemento('');
      setCep('');
      setEstado('');
      setDescricao('');
      setData('');
      setHorario('');
      setServico('');
    }
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    doc.setFontSize(16);
    doc.text("Ordem de Serviço", 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Nome: ${cliente}`, 10, y);
    y += 10;
    doc.text(`Endereço: ${endereco}`, 10, y);
    y += 10;
    doc.text(`Bairro: ${bairro}`, 10, y);
    y += 10;
    doc.text(`Cidade: ${cidade}`, 10, y);
    y += 10;
    doc.text(`Número Residencial: ${numeroResidencial}`, 10, y);
    y += 10;
    doc.text(`Complemento: ${complemento}`, 10, y);
    y += 10;
    doc.text(`CEP: ${cep}`, 10, y);
    y += 10;
    doc.text(`Estado: ${estado}`, 10, y);
    y += 10;
    doc.text(`Descrição do Serviço: ${descricao}`, 10, y);
    y += 10;
    doc.text(`Data: ${data}`, 10, y);
    y += 10;
    doc.text(`Horário: ${horario}`, 10, y);
    y += 10;
    doc.text(`Serviço: ${servico}`, 10, y);
    
    doc.save(`OS_${cliente || 'sem_nome'}.pdf`);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Gerar Ordem de Serviço</h2>
        <form onSubmit={handleGerarOS}>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Nome do Cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="Número Residencial"
              value={numeroResidencial}
              onChange={(e) => setNumeroResidencial(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
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
            <textarea
              placeholder="Descrição do Serviço"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              style={textAreaStyle}
              required
            />
          </div>
          <div style={horizontalGroupStyle}>
            <input
              type="date"
              placeholder="Data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="time"
              placeholder="Horário"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Serviço"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Gerar OS</button>
        </form>
        <br />
        <button onClick={handleGeneratePDF} style={buttonStyle}>Gerar PDF</button>
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
  alignItems: 'center',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '90%',
  maxWidth: '1200px',
};

const horizontalGroupStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
};

const inputStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const textAreaStyle = {
  flex: '1',
  width: '100%',
  height: '80px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#094482',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const backButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#ccc',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default GerarOS;