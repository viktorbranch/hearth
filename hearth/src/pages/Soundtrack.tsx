import { useState } from 'react';
import { config } from '../data/config';
import { HeartDots, SparkleDecorations } from '../components/Card';

const Soundtrack = () => {
  const [playingSong, setPlayingSong] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      title: "Canção 1",
      artist: "Artista 1",
      comment: "A música que nos representa",
      spotifyUrl: "https://open.spotify.com/track/0",
      color: "#ff9db6"
    },
    {
      id: 2,
      title: "Canção 2",
      artist: "Artista 2",
      comment: "Aquela que você cantava no carro",
      spotifyUrl: "https://open.spotify.com/track/0",
      color: "#ddb3ff"
    },
    {
      id: 3,
      title: "Canção 3",
      artist: "Artista 3",
      comment: "Nossa dança lenta",
      spotifyUrl: "https://open.spotify.com/track/0",
      color: "#fff3a6"
    },
    {
      id: 4,
      title: "Canção 4",
      artist: "Artista 4",
      comment: "A que toca quando eu penso em você",
      spotifyUrl: "https://open.spotify.com/track/0",
      color: "#ffb6c1"
    },
  ];

  return (
    <div>
      <HeartDots count={8} />
      <SparkleDecorations count={5} />
      
      <div className="card fade-in" style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ 
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '1.2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.75rem',
          color: '#333'
        }}>
          Nossa Trilha Sonora
        </h2>
        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          textAlign: 'center',
          lineHeight: 1.6 
        }}>
          Cada música conta uma parte da nossa história. ❤️
        </p>
      </div>

      {config.spotifyPlaylistUrl && (
        <div className="card fade-in" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Nossa Playlist Completa
          </h3>
          <div className="spotify-embed">
            <iframe
              src={config.spotifyPlaylistUrl.replace('open.spotify.com', 'open.spotify.com/embed')}
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen"
              title="Playlist do Spotify"
            />
          </div>
        </div>
      )}

      <h3 style={{ 
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '1rem',
        fontWeight: 700,
        marginBottom: '1rem',
        color: '#333',
        textAlign: 'center'
      }}>
        Músicas Especiais
      </h3>

      {songs.map((song, idx) => (
        <div 
          key={song.id} 
          className="card fade-in" 
          style={{ 
            padding: '1rem',
            animationDelay: `${idx * 0.1}s`,
            cursor: 'pointer'
          }}
          onClick={() => setPlayingSong(song.id)}
        >
          <div className="song-card">
            <div 
              className="song-number"
              style={{ color: song.color }}
            >
              {song.id}
            </div>
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
              <div className="song-comment">"{song.comment}"</div>
            </div>
            <div style={{ fontSize: '20px' }}>
              {playingSong === song.id ? '⏸️' : '▶️'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Soundtrack;
