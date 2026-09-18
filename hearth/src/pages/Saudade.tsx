import { useState } from 'react';
import { config } from '../data/config';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Saudade = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [randomMessage, setRandomMessage] = useState<string>('');

  const saudadeActions = [
    'enviar um beijo virtual',
    'mandar uma mensagem',
    'ligar e ouvir sua voz',
    'esperar o próximo encontro',
    'pensar em você por 5 minutos',
    'olhar para as estrelas pensando em você',
  ];

  const detectSaudade = () => {
    setShowResult(true);
    const randomIndex = Math.floor(Math.random() * saudadeActions.length);
    setResult(saudadeActions[randomIndex]);
    
    const msgIndex = Math.floor(Math.random() * config.saudadeMessages.length);
    setRandomMessage(config.saudadeMessages[msgIndex]);
  };

  const getMessage = () => {
    if (!result) return null;
    return `Saudade detectada! 💕 Mas não se preocupe, seu abraço virtual já está a caminho.`;
  };

  return (
    <div>
      <HeartDots count={12} />
      <SparkleDecorations count={5} />
      
      <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '48px', marginBottom: '1rem' }}>😢💭</div>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.3rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          Estou com Saudade
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          lineHeight: 1.6 
        }}>
          Clique abaixo para eu te enviar um carinho especial.
        </p>
      </div>

      <div className="card fade-in" style={{ marginBottom: '1.5rem' }}>
        <button 
          className="btn btn-block"
          onClick={detectSaudade}
          style={{ fontSize: '1.1rem' }}
        >
          Detectar Saudade
        </button>
      </div>

      {showResult && (
        <div className="interactive-area fade-in">
          <div className="interactive-result">
            {getMessage()}
            {result && (
              <p style={{ 
                fontSize: '1.2rem', 
                marginTop: '1rem',
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 600,
                color: '#333'
              }}>
                Recomendação: {result} ✨
              </p>
            )}
          </div>
          
          {result && (
            <div className="card fade-in" style={{ 
              marginTop: '1rem', 
              background: 'linear-gradient(135deg, #fff8f5 0%, #ffe5f2 100%)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1rem', color: '#333' }}>
                {randomMessage}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Saudade;
