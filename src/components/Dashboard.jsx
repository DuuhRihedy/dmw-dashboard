import { CLASSES, PROGRESSION, TITLES } from '../data/gameData';
import ProgressBar from './ProgressBar';

const QUICK_NAV = [
  { id: 'progression', icon: '📋', label: 'Progressão' },
  { id: 'digimons', icon: '🐉', label: 'Digimons' },
  { id: 'equipment', icon: '⚔️', label: 'Equipment' },
  { id: 'titles', icon: '🏆', label: 'Titles' },
  { id: 'tamers', icon: '👤', label: 'Tamer System' },
  { id: 'chipsets', icon: '💎', label: 'ChipSets & Attributes' },
  { id: 'guide', icon: '📖', label: 'Guia Completo' },
  { id: 'market', icon: '🏪', label: 'Market Tracker' },
  { id: 'todos', icon: '📝', label: 'Notas & To-Do' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
];

export default function Dashboard({ tamer, onNavigate }) {
  const allSteps = PROGRESSION.flatMap(p => p.steps);
  const checkedProg = (tamer.checkedProgression || []).length;
  const progPct = allSteps.length ? Math.round((checkedProg / allSteps.length) * 100) : 0;

  const allTitles = Object.values(TITLES).flatMap(c => c.items);
  const checkedTitles = (tamer.checkedTitles || []).length;

  const totalScore = allTitles.reduce((s, t) => s + t.score, 0);
  let earnedScore = 0;
  let gIdx = 0;
  Object.values(TITLES).forEach(cat => {
    cat.items.forEach((t) => {
      if ((tamer.checkedTitles || []).includes('title_' + gIdx)) earnedScore += t.score;
      gIdx++;
    });
  });

  const cls = CLASSES.find(c => c.id === tamer.class) || CLASSES[0];
  const todosDone = (tamer.todos || []).filter(t => t.done).length;
  const todosTotal = (tamer.todos || []).length;

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Dashboard</h2>
        <p>Visão geral do seu progresso no Digital Masters World</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-value">{tamer.name}</div>
          <div className="stat-label">{cls.icon} {cls.name} • Lv {tamer.level || '?'}</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-value">{progPct}%</div>
          <div className="stat-label">Progressão ({checkedProg}/{allSteps.length})</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🐉</div>
          <div className="stat-value">{(tamer.digimons || []).length}</div>
          <div className="stat-label">Digimons</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">{checkedTitles}</div>
          <div className="stat-label">Títulos (Score: {earnedScore})</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-value">{todosDone}/{todosTotal}</div>
          <div className="stat-label">To-Do Completos</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚔️</div>
          <div className="stat-value">{(tamer.checkedEquipment || []).length}</div>
          <div className="stat-label">Equipment Obtidos</div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <div className="card">
          <div className="card-title">Progresso Geral</div>
          <ProgressBar label="Progressão" current={checkedProg} total={allSteps.length} />
          <ProgressBar label="Títulos" current={checkedTitles} total={allTitles.length} color="amber" />
          <ProgressBar label="Score" current={earnedScore} total={totalScore} color="green" />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="card">
          <div className="card-title">Navegação Rápida</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8, marginTop: 8 }}>
            {QUICK_NAV.map(item => (
              <button key={item.id} className="btn btn-outline btn-sm"
                style={{ justifyContent: 'flex-start' }}
                onClick={() => onNavigate?.(item.id)}>
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
