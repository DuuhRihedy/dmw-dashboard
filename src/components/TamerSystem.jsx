import { useState } from 'react';
import { TAMERS, ENHANCED_SKILLS, ATTR_COLORS } from '../data/tamerData';

function StatBar({ label, value, max, color }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
      <span style={{ width: 28, fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{label}</span>
      <div style={{ flex: 1, height: 6, background: 'var(--bg-deep)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 3, transition: 'width 0.4s ease' }} />
      </div>
      <span style={{ width: 28, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color }}>{value}</span>
    </div>
  );
}

function PassiveBadge({ passive }) {
  const attr = ATTR_COLORS[passive.condition] || ATTR_COLORS.All;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px',
      background: attr.bg, borderRadius: 'var(--radius-sm)', fontSize: '0.78rem',
    }}>
      <span style={{ background: attr.color, color: 'var(--text-inverse)', padding: '1px 6px', borderRadius: 8, fontSize: '0.65rem', fontWeight: 700 }}>
        {passive.condition}
      </span>
      <span style={{ color: attr.color, fontWeight: 500 }}>{passive.effect}</span>
    </div>
  );
}

function TamerCard({ tamer, isSelected, onClick }) {
  const totalStats = tamer.stats.hp + tamer.stats.ds + tamer.stats.at + tamer.stats.de;
  return (
    <div
      className={`digi-card ${isSelected ? '' : ''}`}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        borderColor: isSelected ? 'var(--cyan)' : undefined,
        boxShadow: isSelected ? 'var(--shadow-glow)' : undefined,
        background: isSelected ? 'var(--bg-card-hover)' : undefined,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div className="digi-name">{tamer.name}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 8 }}>{tamer.jp}</div>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          Σ{totalStats}
        </span>
      </div>

      <StatBar label="HP" value={tamer.stats.hp} max={100} color="var(--green)" />
      <StatBar label="DS" value={tamer.stats.ds} max={100} color="var(--cyan)" />
      <StatBar label="AT" value={tamer.stats.at} max={10} color="var(--red)" />
      <StatBar label="DE" value={tamer.stats.de} max={2} color="var(--amber)" />

      <div style={{
        marginTop: 10, padding: '8px 10px', background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--amber)' }}>⚡ {tamer.skill.name}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>CD: {tamer.skill.cooldown}</span>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4 }}>{tamer.skill.desc}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 10 }}>
        {tamer.passives.map((p, i) => <PassiveBadge key={i} passive={p} />)}
      </div>
    </div>
  );
}

export default function TamerSystem({ tamer: activeTamer, updateTamer }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('tamers');

  const filtered = TAMERS.filter(t => {
    if (!search) return true;
    const q = search.toLowerCase();
    return t.name.toLowerCase().includes(q) || t.jp.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
  });

  const selectedTamer = TAMERS.find(t => t.id === (activeTamer.tamerChar || 'marcus'));

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Tamer System</h2>
        <p>Todos os Tamers, skills, passivas e Enhanced Skills</p>
      </div>

      <div className="filter-bar" style={{ marginBottom: 16 }}>
        <button className={`filter-chip ${tab === 'tamers' ? 'active' : ''}`} onClick={() => setTab('tamers')}>
          👤 Tamers ({TAMERS.length})
        </button>
        <button className={`filter-chip ${tab === 'enhanced' ? 'active' : ''}`} onClick={() => setTab('enhanced')}>
          ⚡ Enhanced Skills ({ENHANCED_SKILLS.length})
        </button>
      </div>

      {tab === 'tamers' && (
        <>
          {/* Tamer selector */}
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">Seu Tamer</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Tamer escolhido</label>
                <select className="form-select" value={activeTamer.tamerChar || 'marcus'}
                  onChange={e => updateTamer({ tamerChar: e.target.value })}>
                  {TAMERS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
              </div>
              {selectedTamer && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.82rem' }}>
                    <span style={{ color: 'var(--amber)', fontWeight: 600 }}>⚡ {selectedTamer.skill.name}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: 8, fontSize: '0.75rem' }}>({selectedTamer.skill.cooldown})</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                    {selectedTamer.passives.map(p => p.effect).join(' • ')}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="filter-bar">
            <div className="search-wrap" style={{ flex: 1 }}>
              <input type="text" className="search-input" placeholder="Buscar tamer..."
                value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>

          {/* Tamer grid */}
          <div className="digi-grid">
            {filtered.map(t => (
              <TamerCard
                key={t.id}
                tamer={t}
                isSelected={selected === t.id || (activeTamer.tamerChar || 'marcus') === t.id}
                onClick={() => setSelected(s => s === t.id ? null : t.id)}
              />
            ))}
          </div>
        </>
      )}

      {tab === 'enhanced' && (
        <>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">Info</div>
            <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', paddingLeft: 18, lineHeight: 1.8 }}>
              <li>Máximo de <strong>2 Enhanced Skills</strong> registradas.</li>
              <li>Registro e remoção são livres, pode trocar a qualquer momento.</li>
              <li>Skills deletadas <strong>não podem ser restauradas</strong>.</li>
              <li>Obtidas com <strong>Arena Voucher</strong>.</li>
              <li>Mesmo tipo de Tamer Skill + Enhanced compartilham cooldown.</li>
            </ul>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {ENHANCED_SKILLS.map((sk, i) => {
                  const checked = (activeTamer.checkedEnhanced || []).includes('enh_' + i);
                  return (
                    <tr key={i} className={checked ? 'checked' : ''}>
                      <td>
                        <span className={`table-status ${checked ? 'status-have' : 'status-need'}`}>
                          {checked ? '✅' : '❌'}
                        </span>
                      </td>
                      <td><strong>{sk.name}</strong></td>
                      <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{sk.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
