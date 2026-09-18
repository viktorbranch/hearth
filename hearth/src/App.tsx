import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { BottomNav, Layout } from './components/Layout';
import Home from './pages/Home';
import Letters from './pages/Letters';
import Reasons from './pages/Reasons';
import Memories from './pages/Memories';
import Story from './pages/Story';
import WhenOpen from './pages/WhenOpen';
import Soundtrack from './pages/Soundtrack';
import DailyLove from './pages/DailyLove';
import Saudade from './pages/Saudade';
import Surprise from './pages/Surprise';
import './styles/global.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToSection: Record<string, string> = {
    '/': 'home',
    '/letters': 'letters',
    '/memories': 'memories',
    '/story': 'story',
    '/surprise': 'surprise',
  };

  const activeNav = pathToSection[location.pathname] || 'home';

  const handleNavigate = (section: string) => {
    const routes: Record<string, string> = {
      home: '/',
      letters: '/letters',
      memories: '/memories',
      story: '/story',
      surprise: '/surprise',
    };
    navigate(routes[section] || '/');
  };

  return (
    <div className="app-container">
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letters" element={<Layout title="Cartinhas" onBack={() => navigate('/')}><Letters /></Layout>} />
          <Route path="/reasons" element={<Layout title="100 Motivos" onBack={() => navigate('/')}><Reasons /></Layout>} />
          <Route path="/memories" element={<Layout title="Nossas Memórias" onBack={() => navigate('/')}><Memories /></Layout>} />
          <Route path="/story" element={<Layout title="Nossa História" onBack={() => navigate('/')}><Story /></Layout>} />
          <Route path="/when-open" element={<Layout title="Abra quando..." onBack={() => navigate('/')}><WhenOpen /></Layout>} />
          <Route path="/soundtrack" element={<Layout title="Nossa Trilha Sonora" onBack={() => navigate('/')}><Soundtrack /></Layout>} />
          <Route path="/daily-love" element={<Layout title="Dose Diária de Amor" onBack={() => navigate('/')}><DailyLove /></Layout>} />
          <Route path="/saudade" element={<Layout title="Estou com Saudade" onBack={() => navigate('/')}><Saudade /></Layout>} />
          <Route path="/surprise" element={<Layout title="Surpresa Secreta" onBack={() => navigate('/')}><Surprise /></Layout>} />
        </Routes>
      </main>
      <BottomNav active={activeNav} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
