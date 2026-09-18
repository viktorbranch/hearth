import { ReactNode, useState } from 'react';

interface EnvelopeProps {
  children: ReactNode;
  title?: string;
}

export const Envelope = ({ children, title: _title }: EnvelopeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fade-in">
      <div 
        className={`envelope ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className="letter-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

interface LetterProps {
  letter: {
    id: number;
    title: string;
    category: string;
    content: string[];
    date?: string;
  };
}

export const Letter = ({ letter }: LetterProps) => {
  const [showContent, setShowContent] = useState(false);
  
  return (
    <div className="card fade-in">
      <div 
        className="envelope"
        onClick={() => setShowContent(!showContent)}
        style={{ cursor: 'pointer', margin: '0' }}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className={`letter-content ${showContent ? 'show' : ''}`} style={{ 
            opacity: showContent ? 1 : 0,
            maxHeight: showContent ? '500px' : '0',
            transform: showContent ? 'translateY(0)' : 'translateY(20px)'
          }}>
            {letter.content.map((line, idx) => (
              <p key={idx} className="letter-text">
                {line}
              </p>
            ))}
            {letter.date && (
              <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'right', marginTop: '1rem' }}>
                {letter.date}
              </p>
            )}
          </div>
          {!showContent && (
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <span style={{ fontSize: '24px' }}>💌</span>
              <p style={{ color: '#999', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Toque para abrir
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface LockedCardProps {
  card: {
    id: number;
    title: string;
    hint: string;
    unlockMessage: string;
    unlocked: boolean;
    icon: string;
    color: string;
  };
  onUnlock: (id: number) => void;
}

export const LockedCard = ({ card, onUnlock }: LockedCardProps) => {
  const [showHint, setShowHint] = useState(false);
  
  const handleUnlock = () => {
    if (card.unlocked) return;
    setShowHint(true);
    setTimeout(() => onUnlock(card.id), 1500);
  };
  
  return (
    <div 
      className={`card fade-in ${card.unlocked ? '' : 'locked-card'}`}
      onClick={handleUnlock}
      style={{ cursor: card.unlocked ? 'default' : 'pointer' }}
    >
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <div style={{ fontSize: '40px', marginBottom: '0.5rem' }}>{card.icon}</div>
        <h4 style={{ 
          fontFamily: 'Quicksand, sans-serif', 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          {card.title}
        </h4>
        
        {card.unlocked ? (
          <p style={{ color: '#e74c3c', fontWeight: 600, fontSize: '0.9rem' }}>
            {card.unlockMessage}
          </p>
        ) : (
          <>
            {showHint && (
              <p style={{ 
                background: '#fff8f5', 
                padding: '0.75rem', 
                borderRadius: '12px', 
                border: '3px solid #333',
                fontSize: '0.85rem',
                color: '#333',
                marginTop: '0.5rem',
                animation: 'fade-in-up 0.3s ease'
              }}>
                {card.hint}
              </p>
            )}
            {!showHint && (
              <div className="lock-overlay">
                <div className="lock-icon">🔒</div>
                <p className="lock-text">Clique para tentar desbloquear</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
