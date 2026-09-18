import { useState } from 'react';
import { config } from '../data/config';
import { Gallery } from '../components/Gallery';
import { Modal } from '../components/Layout';
import { HeartDots } from '../components/Card';

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleMemoryClick = (memory: any) => {
    setSelectedMemory(memory);
    setShowModal(true);
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
          Nossas Memórias Juntas
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          textAlign: 'center',
          lineHeight: 1.6 
        }}>
          Cada memória é um tesouro que guardo no meu coração. ✨
        </p>
      </div>

      <Gallery memories={config.memories} onMemoryClick={handleMemoryClick} />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {selectedMemory && (
          <div style={{ padding: '1rem' }}>
            <div style={{ 
              width: '100%', 
              height: '300px',
              backgroundColor: '#f0f0f0',
              border: '3px solid #333',
              borderRadius: '12px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#999',
              overflow: 'hidden'
            }}>
              {selectedMemory.image.includes('placeholder') ? (
                <span>📷 Imagem da memória</span>
              ) : (
                <img 
                  src={selectedMemory.image} 
                  alt={selectedMemory.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            <h3 style={{ 
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              {selectedMemory.title}
            </h3>
            <p style={{ 
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '0.85rem',
              color: '#999',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {selectedMemory.date} • {selectedMemory.location}
            </p>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: 1.7, 
              color: '#666'
            }}>
              {selectedMemory.description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Memories;
