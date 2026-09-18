import { useState } from 'react';
import { config } from '../data/config';
import { HeartDots, SparkleDecorations } from '../components/Card';

const DailyLove = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * config.dailyLoveMessages.length);
    setMessage(config.dailyLoveMessages[randomIndex]);
    setShow(true);
  };

  return (
    <div>
      <HeartDots count={10} />
      <SparkleDecorations count={4} />
      
      <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '48px', marginBottom: '1rem' }}>💝</div>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.3rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          Dose Diária de Amor
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          lineHeight: 1.6 
        }}>
          Uma dose de carinho pra você, todos os dias.
        </p>
      </div>

      <div className="card fade-in" style={{ marginBottom: '1.5rem' }}>
        <button 
          className="btn btn-block"
          onClick={getRandomMessage}
        >
          {show ? 'Outra dose ❤️' : 'Quero minha dose'}
        </button>
      </div>

      {show && (
        <div className="message-box fade-in">
          <p className="message-text">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyLove;
