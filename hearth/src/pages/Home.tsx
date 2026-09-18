import { useNavigate } from 'react-router-dom';
import { config } from '../data/config';
import { useCounter } from '../hooks';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Home = () => {
  const navigate = useNavigate();
  const counter = useCounter(config.relationshipStartDate);
  
  const navCards = [
    { id: 'letters', label: 'Cartinhas', icon: '💌', path: '/letters' },
    { id: 'reasons', label: '100 Motivos', icon: '🌟', path: '/reasons' },
    { id: 'memories', label: 'Memórias', icon: '📸', path: '/memories' },
    { id: 'story', label: 'Nossa História', icon: '📖', path: '/story' },
    { id: 'when-open', label: 'Abra quando...', icon: '🔒', path: '/when-open' },
    { id: 'soundtrack', label: 'Trilha Sonora', icon: '🎵', path: '/soundtrack' },
    { id: 'daily-love', label: 'Dose de Amor', icon: '💝', path: '/daily-love' },
    { id: 'saudade', label: 'Estou com Saudade', icon: '😢', path: '/saudade' },
    { id: 'surprise', label: 'Surpresa Secreta', icon: '⭐', path: '/surprise' },
  ];

  return (
    <div>
      <div style={{ position: 'relative', padding: '1rem' }}>
        <HeartDots count={12} />
        <SparkleDecorations count={6} />
        
        <div className="card fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>❤️</div>
          <h1 style={{ 
            fontFamily: 'Quicksand, sans-serif', 
            fontSize: '1.8rem', 
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#333'
          }}>
            {config.greetingMessage}
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            lineHeight: 1.6,
            fontStyle: 'italic'
          }}>
            {config.introMessage}
          </p>
        </div>

        {config.homePhoto && (
          <div className="card fade-in fade-in-stagger-1" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              margin: '0 auto',
              border: '4px solid #333',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#999'
            }}>
              📷
            </div>
          </div>
        )}

        <div className="card fade-in fade-in-stagger-2" style={{ marginBottom: '1.5rem' }}>
          <div className="counter">
            <div style={{ 
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#333',
              letterSpacing: '2px'
            }}>
              {counter.days}
            </div>
            <div className="label" style={{ 
              fontSize: '0.85rem',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              dias de amor
            </div>
          </div>
        </div>

        <div className="card fade-in fade-in-stagger-3" style={{ marginBottom: '0.5rem' }}>
          <div className="section-title">
            Nossas Seções <span style={{ fontSize: '14px' }}>✦</span>
          </div>
          <div className="nav-grid">
            {navCards.map((card, idx) => (
              <div
                key={card.id}
                className="nav-card card"
                onClick={() => navigate(card.path)}
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>{card.icon}</div>
                <span style={{ 
                  fontFamily: 'Quicksand, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#333'
                }}>
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
