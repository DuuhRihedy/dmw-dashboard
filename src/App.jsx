import { useState } from 'react';
import { useStorage } from './hooks/useStorage';
import { PROGRESSION, TITLES, WIKI, DISCORD } from './data/gameData';
import { authClient, useSession } from './auth';
import Dashboard from './components/Dashboard';
import Progression from './components/Progression';
import Digimons from './components/Digimons';
import Equipment from './components/Equipment';
import TitlesSection from './components/TitlesSection';
import TamerSystem from './components/TamerSystem';
import ChipSets from './components/ChipSets';
import GameGuide from './components/GameGuide';
import Market from './components/Market';
import Todos from './components/Todos';
import Settings from './components/Settings';
import DeckTracker from './components/DeckTracker';

const NAV_ITEMS = [
  { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
  { id: 'progression', icon: '📋', label: 'Progressão', badge: 'prog' },
  { id: 'digimons', icon: '🐉', label: 'Digimons', badge: 'digi' },
  { id: 'equipment', icon: '⚔️', label: 'Equipment' },
  { id: 'titles', icon: '🏆', label: 'Titles', badge: 'titles' },
  { id: 'decks', icon: '🎴', label: 'Deck System' },
  { id: 'tamers', icon: '👤', label: 'Tamer System' },
  { id: 'chipsets', icon: '💎', label: 'ChipSets' },
  { id: 'guide', icon: '📖', label: 'Guia Completo' },
  { id: 'market', icon: '🏪', label: 'Market Tracker' },
  { id: 'todos', icon: '📝', label: 'Notas & To-Do' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
];

export default function App() {
  const [section, setSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const store = useStorage();
  const { tamer, tamers, activeId } = store;
  const { data: session } = useSession();

  if (!tamer) return null;

  const allSteps = PROGRESSION.flatMap(p => p.steps);
  const progPct = allSteps.length
    ? Math.round(((tamer.checkedProgression || []).length / allSteps.length) * 100) : 0;
  const allTitles = Object.values(TITLES).flatMap(c => c.items);
  const checkedTitles = (tamer.checkedTitles || []).length;

  const badges = {
    prog: progPct + '%',
    digi: String((tamer.digimons || []).length),
    titles: `${checkedTitles}/${allTitles.length}`,
  };

  const navigate = (id) => {
    setSection(id);
    setSidebarOpen(false);
  };

  const renderSection = () => {
    switch (section) {
      case 'dashboard': return <Dashboard tamer={tamer} onNavigate={navigate} />;
      case 'progression': return <Progression tamer={tamer} toggleCheck={store.toggleCheck} isChecked={store.isChecked} />;
      case 'digimons': return <Digimons tamer={tamer} addDigimon={store.addDigimon} updateDigimon={store.updateDigimon} deleteDigimon={store.deleteDigimon} />;
      case 'equipment': return <Equipment tamer={tamer} toggleCheck={store.toggleCheck} isChecked={store.isChecked} />;
      case 'titles': return <TitlesSection tamer={tamer} toggleCheck={store.toggleCheck} isChecked={store.isChecked} />;
      case 'decks': return <DeckTracker tamer={tamer} updateTamer={store.updateTamer} />;
      case 'tamers': return <TamerSystem tamer={tamer} updateTamer={store.updateTamer} />;
      case 'chipsets': return <ChipSets />;
      case 'guide': return <GameGuide />;
      case 'market': return <Market tamer={tamer} updateTamer={store.updateTamer} />;
      case 'todos': return <Todos tamer={tamer} addTodo={store.addTodo} toggleTodo={store.toggleTodo} deleteTodo={store.deleteTodo} updateTamer={store.updateTamer} />;
      case 'settings': return <Settings tamer={tamer} tamers={tamers} updateTamer={store.updateTamer} createTamer={store.createTamer} deleteTamer={store.deleteTamer} activeId={activeId} exportData={store.exportData} importData={store.importData} resetAll={store.resetAll} />;
      default: return null;
    }
  };

  const sectionTitle = NAV_ITEMS.find(n => n.id === section)?.label || 'Dashboard';

  return (
    <div className="app-layout">
      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <span className="logo-icon">🐉</span>
          <h1>{session?.user?.name ? session.user.name.split(' ')[0] : 'DuuhRihedy'} Dashboard</h1>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <div key={item.id}
              className={`nav-item ${section === item.id ? 'active' : ''}`}
              onClick={() => navigate(item.id)}>
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{badges[item.badge]}</span>}
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          {session?.user && (
            <div className="text-xs text-gray-400 mb-3 px-2 truncate">
              Logado como: <br />
              <strong className="text-white">{session.user.name || session.user.email}</strong>
            </div>
          )}
          <a href={WIKI} target="_blank" rel="noopener noreferrer">📖 DMW Wiki</a>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>💬 Discord</a>
          <button onClick={async () => {
            try {
              await authClient.signOut();
            } catch (err) {
              console.error('Logout error:', err);
            }
            localStorage.clear();
            window.location.href = '/login';
          }} className="w-full text-left text-red-400 hover:text-red-300 mt-4 px-2 py-1 flex items-center gap-2 text-sm transition-colors cursor-pointer">
            🚪 Sair / Logout
          </button>
        </div>
      </aside>

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <button className="menu-toggle" onClick={() => setSidebarOpen(o => !o)}>☰</button>
          <span className="header-title">{sectionTitle}</span>
        </div>
        <div className="header-right">
          <div className="tamer-selector">
            <span>👤</span>
            <select value={activeId} onChange={e => store.setActiveTamer(e.target.value)}>
              {Object.values(tamers).map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main-content" key={section}>
        {renderSection()}
      </main>
    </div>
  );
}
