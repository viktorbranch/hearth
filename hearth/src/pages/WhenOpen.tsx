import { useState } from 'react';
import { config } from '../data/config';
import { HeartDots } from '../components/Card';

const WhenOpen = () => {
  const [unlockedIds, setUnlockedIds] = useState<number[]>(
    config.lockedCards.filter(c => c.unlocked).map(c => c.id)
  );

  const handleUnlock = (id: number) => {
    if (!unlockedIds.includes(id)) {
      setUnlockedIds(prev => [...prev, id]);
    }
  };

  const iconMap: Record<string, string> = {
    gift: '🎁',
    sun: '☀️',
    cake: '🎂',
    music: '🎵',
  };

  const colorMap: Record<string, string> = {
    rose: '#ff9db6',
    yellow: '#fff3a6',
    pink: '#ffb6c1',
    purple: '#ddb3ff',
  };

  return (
    <div>
      <HeartDots count={10} />
      
      <div className="card fade-in" style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.75rem',
          color: '#333'
        }}>
          Abra quando...
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          textAlign: 'center',
          lineHeight: 1.6 
        }}>
          Alguns segredos estão bloqueados. Tente clicar para ver se consegue desbloquear!
        </p>
      </div>

      {config.lockedCards.map((card, idx) => {
        const isUnlocked = unlockedIds.includes(card.id) || card.unlocked;
        return (
          <div 
            key={card.id} 
            className="card fade-in" 
            style={{ 
              padding: '1rem',
              animationDelay: `${idx * 0.1}s`,
              cursor: isUnlocked ? 'default' : 'pointer',
              opacity: isUnlocked ? 1 : 0.7 
            }}
            onClick={() => {
              if (!isUnlocked) {
                handleUnlock(card.id);
              }
            }}
          >
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div 
                className="icon-square"
                style={{ 
                  backgroundColor: colorMap[card.color],
                  fontSize: '24px'
                }}
              >
                {iconMap[card.icon] || '🎁'}
              </div>
              <h3 style={{ 
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#333',
                flex: 1
              }}>
                {card.title}
              </h3>
              <div style={{ fontSize: '20px' }}>
                {isUnlocked ? '🔓' : '🔒'}
              </div>
            </div>
            
            <p style={{ 
              color: '#999', 
              fontSize: '0.9rem', 
              marginBottom: '0.75rem',
              fontStyle: 'italic'
            }}>
              {card.hint}
            </p>
            
            {isUnlocked ? (
              <p style={{ 
                color: '#e74c3c', 
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.75rem',
                background: '#fff8f5',
                borderRadius: '12px'
              }}>
                {card.unlockMessage}
              </p>
            ) : (
              <p style={{ 
                color: '#999',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}>
                Clique para tentar desbloquear! ❤️
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WhenOpen;
