import { useState } from 'react';
import { config } from '../data/config';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Reasons = () => {
  const [currentReason, setCurrentReason] = useState<any>(null);
  const [count, setCount] = useState(0);
  
  const reasons = config.reasons;
  
  const getRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    setCurrentReason(reasons[randomIndex]);
    setCount(c => c + 1);
  };

  return (
    <div>
      <HeartDots count={8} />
      <SparkleDecorations count={4} />
      
      <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          100 Motivos
        </div>
        <p style={{ color: '#999', fontSize: '0.9rem' }}>
          Por que eu te amo, motivo #{count + 1}
        </p>
      </div>

      <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <button 
          className="btn btn-block"
          onClick={getRandomReason}
        >
          Mostrar motivo #{count === 0 ? '1' : count + 1}
        </button>
      </div>

      {currentReason && (
        <div className="reason-card fade-in">
          <div style={{ 
            fontSize: '2rem',
            fontFamily: 'Quicksand, sans-serif',
            fontWeight: 700,
            color: '#ff9db6',
            marginBottom: '1rem'
          }}>
            #{count}
          </div>
          <p style={{ 
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: '#333',
            fontWeight: 500
          }}>
            {currentReason}
          </p>
        </div>
      )}
    </div>
  );
};

export default Reasons;
