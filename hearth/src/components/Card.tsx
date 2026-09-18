import { ReactNode, useState } from 'react';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
   hover?: boolean;
}

export const Card = ({ title, icon, children, className, onClick, hover: _hover = true }: CardProps) => {
  return (
    <div 
      className={`card fade-in ${className || ''}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {icon && (
        <div className="card-icon sparkle">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="card-title">
          {title}
          <span className="title-sparkles">✦</span>
        </h3>
      )}
      {children}
    </div>
  );
};

export const CardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card-icon sparkle">
      {children}
    </div>
  );
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  block?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className,
  block = false 
}: ButtonProps) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const blockClass = block ? 'btn-block' : '';
  
  return (
    <button 
      className={`btn ${variantClass} ${sizeClass} ${blockClass} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface IconSquareProps {
  children: ReactNode;
  color?: string;
  size?: number;
}

export const IconSquare = ({ children, color = 'pink', size = 40 }: IconSquareProps) => {
  return (
    <div 
      className={`icon-square ${color}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {children}
    </div>
  );
};

interface SparkleProps {
  count?: number;
}

export const SparkleDecorations = ({ count = 6 }: SparkleProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => (
    <span key={i} className={`sparkle sparkle-${i + 1}`}>✦</span>
  ));
  
  return <>{sparkles}</>;
};

interface HeartDotsProps {
  count?: number;
}

export const HeartDots = ({ count = 8 }: HeartDotsProps) => {
  const [hearts] = useState(() => {
    return Array.from({ length: count }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const fontSize = 8 + Math.random() * 8;
      const delay = Math.random() * 3;
      
      return {
        id: i,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${fontSize}px`,
          animationDelay: `${delay}s`
        }
      };
    });
  });
  
  return (
    <>
      {hearts.map((heart) => (
        <div 
          key={heart.id}
          className="heart-dots"
          style={heart.style}
        >
          ♥
        </div>
      ))}
    </>
  );
};
