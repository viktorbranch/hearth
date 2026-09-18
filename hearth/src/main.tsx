import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { config } from './data/config';
import './styles/global.css';
import App from './App';
import './index.css';

document.title = `${config.girlfriendName} ❤️ ${config.yourName}`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
