import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseCliente';
import jsPDF from 'jspdf';

function FinalizarOS() {
  // Variáveis de estado
  const [status, setStatus] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numeroResidencial, setNumeroResidencial] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [pecaSubstituida, setPecaSubstituida] = useState('');
  const [dataAbertura, setDataAbertura] = useState('');
  const [dataFinalizacao, setDataFinalizacao] = useState('');

  const navigate = useNavigate();

  const handleFinalizar = async (e) => {
    e.preventDefault();
    // Mapeamento dos campos para as colunas da tabela "finalizaros"
    const finalizarData = {
      statusOS: status,
      observacoes,
      nomeCliente,
      cpf,
      celular,
      endereco,
      bairro,
      cidade,
      numResidencial: numeroResidencial,
      complemento,
      cep,
      estado,
      pecaSubstituida,
      data: dataAbertura,
      dataConclusao: dataFinalizacao,
    };

    const { data: insertedData, error } = await supabase
      .from('finalizaros')
      .insert([finalizarData]);

    if (error) {
      console.error('Erro ao finalizar OS:', error.message);
      alert('Erro ao finalizar OS. Verifique o console para detalhes.');
    } else {
      alert(`OS finalizada com status: ${status}`);
      // Limpa os campos
      setStatus('');
      setObservacoes('');
      setNomeCliente('');
      setCpf('');
      setCelular('');
      setEndereco('');
      setBairro('');
      setCidade('');
      setNumeroResidencial('');
      setComplemento('');
      setCep('');
      setEstado('');
      setPecaSubstituida('');
      setDataAbertura('');
      setDataFinalizacao('');
    }
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    doc.setFontSize(16);
    doc.text("Finalização da OS", 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Status: ${status}`, 10, y);
    y += 10;
    doc.text(`Observações: ${observacoes}`, 10, y);
    y += 10;
    doc.text(`Nome do Cliente: ${nomeCliente}`, 10, y);
    y += 10;
    doc.text(`CPF: ${cpf}`, 10, y);
    y += 10;
    doc.text(`Celular: ${celular}`, 10, y);
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
    doc.text(`Peça Substituída: ${pecaSubstituida}`, 10, y);
    y += 10;
    doc.text(`Data de Abertura: ${dataAbertura}`, 10, y);
    y += 10;
    doc.text(`Data de Finalização: ${dataFinalizacao}`, 10, y);
    
    doc.save(`FinalizarOS_${nomeCliente || 'semNome'}.pdf`);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Finalizar Ordem de Serviço</h2>
        <form onSubmit={handleFinalizar}>
          <h3>Dados da OS</h3>
          {/* Campo "Número da OS" removido */}
          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={inputStyle}
                required
              >
                <option value="">Selecione o status</option>
                <option value="finalizada">Finalizada</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </div>
          </div>

          <div style={sectionStyle}>
            <div style={{ ...inputGroupStyle, flex: '1 1 100%' }}>
              <textarea
                placeholder="Observações"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                style={textAreaStyle}
                required
              />
            </div>
          </div>

          <hr style={hrStyle} />

          <h3>Dados do Cliente</h3>
          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Nome do Cliente"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Número Residencial"
                value={numeroResidencial}
                onChange={(e) => setNumeroResidencial(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <hr style={hrStyle} />

          <h3>Dados da Ordem</h3>
          <div style={sectionStyle}>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Peça Substituída"
                value={pecaSubstituida}
                onChange={(e) => setPecaSubstituida(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="date"
                placeholder="Data de Abertura"
                value={dataAbertura}
                onChange={(e) => setDataAbertura(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="date"
                placeholder="Data de Finalização"
                value={dataFinalizacao}
                onChange={(e) => setDataFinalizacao(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <button type="submit" style={buttonStyle}>Finalizar OS</button>
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

// ===== Estilos =====
const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '100%',
  maxWidth: '1200px'
};

const sectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '20px',
  justifyContent: 'space-between'
};

const inputGroupStyle = {
  flex: '1 1 30%',
  minWidth: '200px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const textAreaStyle = {
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

const hrStyle = {
  borderTop: '1px solid #ccc',
  margin: '30px 0'
};

export default FinalizarOS;