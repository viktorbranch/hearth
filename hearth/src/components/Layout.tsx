import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  backTo?: string;
  onBack?: () => void;
}

export const Header = ({ title, onBack }: HeaderProps) => {
  return (
    <header className="header fade-in">
      {onBack && (
        <button 
          className="back-btn"
          onClick={onBack}
          style={{ background: '#ff9db6', fontSize: '20px' }}
        >
          ←
        </button>
      )}
      <h1>{title}</h1>
      <div style={{ width: '40px' }}></div>
    </header>
  );
};

interface LayoutProps {
  title: string;
  onBack?: () => void;
  children: ReactNode;
}

export const Layout = ({ title, onBack, children }: LayoutProps) => {
  return (
    <div className="app-container">
      <Header title={title} onBack={onBack} />
      <main className="app-content">
        <div className="page-container">
          {children}
        </div>
      </main>
    </div>
  );
};

interface BottomNavProps {
  active?: string;
  onNavigate?: (section: string) => void;
}

export const BottomNav = ({ active = '', onNavigate }: BottomNavProps) => {
  const navItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'letters', label: 'Cartas', icon: '💌' },
    { id: 'memories', label: 'Memórias', icon: '📸' },
    { id: 'story', label: 'História', icon: '📖' },
    { id: 'surprise', label: 'Surpresa', icon: '⭐' },
  ];
  
  return (
    <nav className="bottom-nav fade-in">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${active === item.id ? 'active' : ''}`}
          onClick={() => onNavigate?.(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative' }}
      >
        <button 
          className="modal-close"
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '-40px', 
            right: '0',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#333'
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
