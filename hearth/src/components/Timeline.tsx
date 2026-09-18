interface TimelineProps {
  events: {
    id: number;
    date: string;
    title: string;
    description: string;
    icon: string;
    image?: string;
  }[];
}

export const Timeline = ({ events }: TimelineProps) => {
  const iconMap: Record<string, string> = {
    heart: '❤️',
    kiss: '😘',
    message: '💬',
    map: '🗺️',
    home: '🏠',
    gift: '🎁',
    cake: '🎂',
    ring: '💍',
    travel: '✈️',
    smile: '😊',
    star: '⭐',
    sun: '☀️',
    moon: '🌙',
    music: '🎵',
    photo: '📸',
    calendar: '📅',
    coffee: '☕',
    movie: '🎬',
    beach: '🏖️',
    mountain: '⛰️',
  };

  return (
    <div className="timeline fade-in">
      {events.map((event, index) => (
        <div 
          key={event.id} 
          className="timeline-item"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
           <div className="timeline-content fade-in">
            <div className="timeline-date">{event.date}</div>
            <h4 className="timeline-title">
              {iconMap[event.icon] || event.icon} {event.title}
            </h4>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
