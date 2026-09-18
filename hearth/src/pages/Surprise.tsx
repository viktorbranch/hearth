import { useState, useRef } from 'react';
import { config } from '../data/config';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Surprise = () => {
  const [count, setCount] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const heartRef = useRef<HTMLDivElement>(null);

  const totalClicksToReveal = 7;

  const handleHeartClick = () => {
    if (revealed) return;
    
    setCount(c => c + 1);
    
    if (count + 1 >= totalClicksToReveal) {
      setRevealed(true);
    }
  };

  if (revealed) {
    return (
      <div style={{ 
        background: 'linear-gradient(135deg, #ff9db6 0%, #ddb3ff 50%, #fff3a6 100%)',
        minHeight: '100vh',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <div className="surprise-reveal fade-in" style={{ 
          border: '6px solid #333',
          borderRadius: '20px',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '14px',
            opacity: '0.2'
          }}>
            ✦ ✦ ✦ ✦ ✦ ✦ ✦
          </div>
          <div style={{ fontSize: '48px', marginBottom: '1.5rem' }}>💖</div>
          <h2 style={{ 
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            color: '#333',
            letterSpacing: '2px'
          }}>
            Surpresa Secreta!
          </h2>
          <div style={{ 
            background: '#fff8f5',
            border: '4px solid #333',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'left',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              {config.secretMessage}
            </p>
            <p style={{ textAlign: 'right', fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}>
              - Com todo o meu amor,
              <br />
              {config.yourName}
            </p>
          </div>
          <div className="surprise-counter">
            Cliques: {count} / {totalClicksToReveal}
          </div>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>
            ⭐ Obrigado por me encontrar aqui, meu amor! ⭐
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeartDots count={10} />
      <SparkleDecorations count={5} />
      
      <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          Surpresa Secreta
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          lineHeight: 1.6 
        }}>
          Há um coração escondido... encontre-o e clique várias vezes.
        </p>
      </div>

      <div className="card fade-in" style={{ 
        textAlign: 'center',
        padding: '3rem 1rem',
        position: 'relative',
        height: '300px',
        overflow: 'hidden'
      }}>
        <p className="surprise-counter">
          Cliques: {count} / {totalClicksToReveal}
        </p>
        
        <div 
          ref={heartRef}
          className="surprise-heart"
          style={{ 
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            fontSize: '32px',
            cursor: 'pointer'
          }}
          onClick={handleHeartClick}
        >
          ❤️
        </div>
        
        {count > 0 && count < totalClicksToReveal && (
          <div style={{ 
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#fff8f5',
            borderRadius: '12px',
            border: '3px solid #333'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>
              Continue clicando no coração! ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Surprise;
