interface GalleryProps {
  memories: {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
  }[];
  onMemoryClick?: (memory: any) => void;
}

export const Gallery = ({ memories, onMemoryClick }: GalleryProps) => {
  return (
    <div className="gallery-grid fade-in">
      {memories.map((memory, idx) => (
        <div 
          key={memory.id}
          className="memory-card card"
          onClick={() => onMemoryClick?.(memory)}
          style={{ 
            cursor: 'pointer',
            animationDelay: `${idx * 0.1}s`
          }}
        >
          <div style={{ 
            width: '100%', 
            height: '150px', 
            backgroundColor: '#f0f0f0',
            border: '3px solid #333',
            borderRadius: '12px',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#999',
            overflow: 'hidden'
          }}>
            {memory.image !== '/placeholder-photo1.png' && memory.image !== '/placeholder-photo2.png' && memory.image !== '/placeholder-photo3.png' && memory.image !== '/placeholder-photo4.png' ? (
              <img 
                src={memory.image} 
                alt={memory.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span>📷 Clique para ver</span>
            )}
          </div>
          <div className="memory-date">{memory.date}</div>
          <h4 className="memory-title">{memory.title}</h4>
          <p className="memory-location">{memory.location}</p>
        </div>
      ))}
    </div>
  );
};
