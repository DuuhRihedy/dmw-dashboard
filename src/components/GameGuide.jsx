import { useState, useMemo } from 'react';
import { GAME_GUIDES, GAME_SYSTEMS, SPECIAL_NPCS, TRANS_EXP_TABLE } from '../data/guideData';

const TABS = [
  { id: 'digimon', label: '🐉 Digimon Systems', data: GAME_GUIDES },
  { id: 'game', label: '🎮 Game Systems', data: GAME_SYSTEMS },
  { id: 'npcs', label: '👤 NPCs Especiais', data: null },
];

function GuideCard({ guide, isOpen, onToggle }) {
  return (
    <div className={`guide-card ${isOpen ? 'open' : ''}`}>
      <button className="guide-card-header" onClick={onToggle}>
        <span className="guide-card-icon">{guide.icon}</span>
        <div className="guide-card-info">
          <span className="guide-card-title">{guide.title}</span>
          <span className="guide-card-desc">{guide.desc}</span>
        </div>
        <span className="guide-card-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="guide-card-body">
          {guide.sections.map((sec, i) => (
            <div key={i} className="guide-section">
              <h4 className="guide-section-title">{sec.title}</h4>
              {sec.content && <p className="guide-section-content">{sec.content}</p>}
              {sec.items && (
                <ul className="guide-section-list">
                  {sec.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NPCList({ search }) {
  const filtered = useMemo(() => {
    if (!search) return SPECIAL_NPCS;
    const q = search.toLowerCase();
    return SPECIAL_NPCS.filter(n =>
      n.name.toLowerCase().includes(q) ||
      n.role.toLowerCase().includes(q) ||
      n.desc.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="npc-grid">
      {filtered.map((npc, i) => (
        <div key={i} className="npc-card">
          <span className="npc-icon">{npc.icon}</span>
          <div className="npc-info">
            <span className="npc-name">{npc.name}</span>
            <span className="npc-role">{npc.role}</span>
            <span className="npc-location">📍 {npc.location}</span>
            <span className="npc-desc">{npc.desc}</span>
          </div>
        </div>
      ))}
      {filtered.length === 0 && <p className="no-results">Nenhum NPC encontrado.</p>}
    </div>
  );
}

function TranscendenceTable() {
  return (
    <div className="trans-table-wrapper">
      <h3 className="trans-table-title">📊 Tabela de EXP — Sacrifício 5/5 Digimon (Regular Charge)</h3>
      <p className="trans-table-note">Valores em %. Hyper Charge = valor × 1.6</p>
      <div className="trans-table-scroll">
        <table className="trans-table">
          <thead>
            <tr>{TRANS_EXP_TABLE.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {TRANS_EXP_TABLE.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? 'level-cell' : ''}>{typeof cell === 'number' ? `${cell}%` : cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function GameGuide() {
  const [activeTab, setActiveTab] = useState('digimon');
  const [search, setSearch] = useState('');
  const [openCards, setOpenCards] = useState({});
  const [showTransTable, setShowTransTable] = useState(false);

  const toggleCard = (key) => {
    setOpenCards(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentTab = TABS.find(t => t.id === activeTab);
  const data = currentTab?.data;

  const filteredEntries = useMemo(() => {
    if (!data) return [];
    const entries = Object.entries(data);
    if (!search) return entries;
    const q = search.toLowerCase();
    return entries.filter(([, v]) =>
      v.title.toLowerCase().includes(q) ||
      v.desc.toLowerCase().includes(q) ||
      v.sections?.some(s =>
        s.title?.toLowerCase().includes(q) ||
        s.content?.toLowerCase().includes(q) ||
        s.items?.some(it => it.toLowerCase().includes(q))
      )
    );
  }, [data, search]);

  const expandAll = () => {
    const keys = {};
    filteredEntries.forEach(([k]) => { keys[k] = true; });
    setOpenCards(prev => ({ ...prev, ...keys }));
  };

  const collapseAll = () => setOpenCards({});

  return (
    <section className="game-guide">
      <h2>📖 Guia Completo DMW</h2>
      <p className="section-desc">Todo o conhecimento da wiki internalizado. Busque qualquer sistema ou mecânica.</p>

      <div className="guide-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`guide-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab.id); setSearch(''); }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="guide-toolbar">
        <input
          type="text"
          placeholder={`🔍 Buscar em ${currentTab?.label}...`}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="guide-search"
        />
        {activeTab !== 'npcs' && (
          <div className="guide-toolbar-btns">
            <button className="btn-sm" onClick={expandAll}>Expandir Tudo</button>
            <button className="btn-sm" onClick={collapseAll}>Recolher Tudo</button>
          </div>
        )}
      </div>

      {activeTab === 'npcs' ? (
        <NPCList search={search} />
      ) : (
        <>
          <div className="guide-cards">
            {filteredEntries.map(([key, guide]) => (
              <GuideCard
                key={key}
                guide={guide}
                isOpen={!!openCards[key]}
                onToggle={() => toggleCard(key)}
              />
            ))}
            {filteredEntries.length === 0 && <p className="no-results">Nenhum resultado para "{search}"</p>}
          </div>

          {activeTab === 'digimon' && (
            <div className="trans-toggle">
              <button className="btn-accent" onClick={() => setShowTransTable(v => !v)}>
                {showTransTable ? '🔼 Esconder' : '📊 Ver'} Tabela de EXP — Transcendence
              </button>
              {showTransTable && <TranscendenceTable />}
            </div>
          )}
        </>
      )}
    </section>
  );
}
