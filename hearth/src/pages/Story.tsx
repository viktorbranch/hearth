import { config } from '../data/config';
import { Timeline } from '../components/Timeline';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Story = () => {
  return (
    <div>
      <HeartDots count={10} />
      <SparkleDecorations count={5} />
      
      <div className="card fade-in" style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.3rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.75rem',
          color: '#333'
        }}>
          Nossa História de Amor
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          textAlign: 'center',
          lineHeight: 1.6 
        }}>
          Cada momento nos contou uma história. Aqui está a nossa jornada.
        </p>
      </div>

      <Timeline events={config.timeline} />

      <div className="card fade-in" style={{ 
        textAlign: 'center', 
        marginTop: '2rem',
        background: 'linear-gradient(135deg, #fff8f5 0%, #ffe5f2 100%)'
      }}>
        <p style={{ 
          fontSize: '1.1rem',
          fontStyle: 'italic',
          color: '#333',
          lineHeight: 1.7
        }}>
          "E assim, dois corações solitários se encontraram no caminho e decidiram caminhar juntos para sempre."
        </p>
        <div style={{ marginTop: '1rem' }}>
          <span style={{ fontSize: '24px' }}>❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
