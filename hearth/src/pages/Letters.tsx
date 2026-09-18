import { useState } from 'react';
import { config } from '../data/config';
import { Letter } from '../components/Envelope';
import { HeartDots } from '../components/Card';

const Letters = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['Todos', 'tristeza', 'saudade', 'encontro'];
  const filteredLetters = selectedCategory && selectedCategory !== 'Todos'
    ? config.letters.filter(l => l.category === selectedCategory)
    : config.letters;

  return (
    <div>
      <HeartDots count={8} />
      
      <div className="card fade-in" style={{ marginBottom: '1rem' }}>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.1rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#333'
        }}>
          Categorias
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'Todos' ? null : cat)}
              className="btn"
              style={{ 
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                background: selectedCategory === cat || (cat === 'Todos' && !selectedCategory) 
                  ? '#ff9db6' : 'transparent',
                border: selectedCategory === cat || (cat === 'Todos' && !selectedCategory) 
                  ? '3px solid #333' : '3px dashed #999',
              }}
            >
              {cat === 'Todos' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </div>

      {filteredLetters.length > 0 ? (
        filteredLetters.map((letter, idx) => (
          <div key={letter.id} className="fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <Letter letter={letter} />
          </div>
        ))
      ) : (
        <div className="card fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: '#999', fontSize: '1rem' }}>Nenhuma carta nesta categoria ainda. ❤️</p>
        </div>
      )}
    </div>
  );
};

export default Letters;
