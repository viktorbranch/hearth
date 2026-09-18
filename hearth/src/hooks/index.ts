import { useState, useEffect } from 'react';

export const useRandom = (items: any[]) => {
  const [current, setCurrent] = useState<any | null>(null);
  
  const getRandom = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setCurrent(randomItem);
    return randomItem;
  };
  
  return { current, getRandom };
};

export const useCounter = (startDate: string) => {
  const [timeDiff, setTimeDiff] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const start = new Date(startDate).getTime();
    
    const updateCounter = () => {
      const now = new Date().getTime();
      const diff = now - start;
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeDiff({ days, hours, minutes, seconds });
      }
    };
    
    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    
    return () => clearInterval(interval);
  }, [startDate]);
  
  return timeDiff;
};

export const useClickCount = (threshold: number = 5) => {
  const [count, setCount] = useState(0);
  const [revealed, setReveal] = useState(false);
  
  const handleClick = () => {
    if (!revealed) {
      setCount(c => c + 1);
      if (count + 1 >= threshold) {
        setReveal(true);
      }
    }
  };
  
  return { count, revealed, handleClick };
};
