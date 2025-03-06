import './App.css'
import { useState } from 'react'

function Card({ titulo, descricao }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleAcessar = (e) => {
    e.preventDefault();
    window.location.href = `https://sso-hom.unifesspa.edu.br/sso-server/login?sistema=${encodeURIComponent(titulo)}`;
  };

  return (
    <div 
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <div className="icon-wrapper">
          <div className="icon-circle">
            {titulo.charAt(0)}
          </div>
        </div>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <a href={`https://sso-hom.unifesspa.edu.br/sso-server/login?sistema=${encodeURIComponent(titulo)}`} className="btn">
          <span>Acessar</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="arrow-icon"
          >
            <path 
              fillRule="evenodd" 
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
      <div className="card-background"></div>
    </div>
  )
}

function App() {
  const sistemas = [
    {
      id: 1,
      titulo: 'ATENA',
      descricao: 'Sistema de Gestão Acadêmica e Administrativa'
    },
    {
      id: 2,
      titulo: 'Avaliação de Desempenho',
      descricao: 'Sistema de Avaliação de Desempenho Institucional'
    },
    {
      id: 3,
      titulo: 'COC',
      descricao: 'Sistema de Controle e Organização de Conteúdo'
    },
    {
      id: 4,
      titulo: 'SAE',
      descricao: 'Sistema de Assistência Estudantil'
    },
    {
      id: 5,
      titulo: 'Sisplad',
      descricao: 'Sistema de Planejamento das Atividades Docentes'
    },
    {
      id: 6,
      titulo: 'Sisprol',
      descricao: 'Sistema de Projetos Online'
    },
    {
      id: 7,
      titulo: 'Udocs',
      descricao: 'Sistema de Gestão de Documentos'
    }
  ]

  return (
    <div className="page-wrapper">
      <div className="background-animation"></div>
      <header className="main-header">
        <div className="header-content">
          <div className="logo-unifesspa">
            <img src="img/unifesspa.png" alt="Logo UNIFESSPA" />
          </div>
          <div className="header-text">
            <h1>UNIVERSIDADE FEDERAL DO SUL E SUDESTE DO PARÁ</h1>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="section-header">
          <div className="logo-area">
            
          </div>
          
        </div>

        <div className="grid">
          {sistemas.map(sistema => (
            <Card
              key={sistema.id}
              titulo={sistema.titulo}
              descricao={sistema.descricao}
            />
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          Centro de Tecnologia da Informação e Comunicação
          <span className="footer-divider">|</span>
          +55 94 2101 5945
          <span className="footer-divider">|</span>
          Copyright © 2006 - 2025 UNIFESSPA
        </div>
      </footer>
    </div>
  )
}

export default App
