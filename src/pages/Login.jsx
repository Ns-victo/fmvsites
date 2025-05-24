import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação simples de autenticação:
    if (email === 'admin@mail.com' && senha === '123456') {
      // Após login bem-sucedido, redireciona para a página Home:
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={inputGroupStyle}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#094482',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const inputGroupStyle = {
  marginBottom: '15px'
};

const inputStyle = {
  width: '100%',
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
  cursor: 'pointer'
};

export default Login;