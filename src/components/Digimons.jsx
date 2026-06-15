import { useState } from 'react';
import { CLASSES, ATTRIBUTES, RANKS, ELEMENTS, FAMILIES } from '../data/gameData';

function DigimonModal({ digimon, onSave, onClose }) {
  const isEdit = !!digimon;
  const [form, setForm] = useState({
    name: digimon?.name || '',
    rank: digimon?.rank || 'SSS',
    class: digimon?.class || 'sk',
    attribute: digimon?.attribute || 'vaccine',
    element: digimon?.element || 'neutral',
    level: digimon?.level || 1,
    scale: digimon?.scale || 100,
    cloneStatus: digimon?.cloneStatus || 'none',
    transcendence: digimon?.transcendence || 0,
    families: digimon?.families || [],
    stats: digimon?.stats || { hp: '', ds: '', at: '', as: '', ct: '', cd: '', ht: '', de: '', bl: '', ev: '', sk: '' },
    notes: digimon?.notes || '',
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const setStat = (k, v) => setForm(f => ({ ...f, stats: { ...f.stats, [k]: v } }));
  const toggleFamily = (id) => {
    setForm(f => {
      const fams = f.families || [];
      return { ...f, families: fams.includes(id) ? fams.filter(x => x !== id) : [...fams, id] };
    });
  };



  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-title">{isEdit ? 'Editar' : 'Adicionar'} Digimon</div>
        <div className="form-group">
          <label className="form-label">Nome</label>
          <input className="form-input" value={form.name} onChange={e => set('name', e.target.value)} placeholder="ex: Omnimon, Gallantmon..." />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Rank</label>
            <select className="form-select" value={form.rank} onChange={e => set('rank', e.target.value)}>
              {RANKS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Classe</label>
            <select className="form-select" value={form.class} onChange={e => set('class', e.target.value)}>
              {CLASSES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Attribute</label>
            <select className="form-select" value={form.attribute} onChange={e => set('attribute', e.target.value)}>
              {ATTRIBUTES.map(a => <option key={a.id} value={a.id}>{a.short} — {a.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Elemento</label>
            <select className="form-select" value={form.element} onChange={e => set('element', e.target.value)}>
              {ELEMENTS.map(a => <option key={a.id} value={a.id}>{a.icon} {a.name}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Level</label>
            <input type="number" className="form-input" min="1" max="140" value={form.level} onChange={e => set('level', +e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Tamanho (Scale %)</label>
            <input type="number" className="form-input" min="100" max="140" step="0.01" value={form.scale} onChange={e => set('scale', e.target.value ? +e.target.value : '')} placeholder="ex: 139.18" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Clone Status</label>
            <select className="form-select" value={form.cloneStatus} onChange={e => set('cloneStatus', e.target.value)}>
              <option value="none">Não clonado</option>
              <option value="partial">Parcial</option>
              <option value="full">Completo</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Transcendence</label>
            <input type="number" className="form-input" min="0" max="10" value={form.transcendence} onChange={e => set('transcendence', +e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Famílias</label>
          <div className="families-grid">
            {FAMILIES.map(fam => (
              <button key={fam.id} type="button" className={`family-btn ${form.families.includes(fam.id) ? 'active' : ''}`} onClick={() => toggleFamily(fam.id)}>
                {fam.short}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-outline" style={{ width: '100%' }} onClick={() => setShowAdvanced(!showAdvanced)}>
            {showAdvanced ? 'Ocultar Status Avançados 📊' : 'Mostrar Status Avançados 📊'}
          </button>
          {showAdvanced && (
            <div className="advanced-stats-grid">
              {['hp', 'ds', 'at', 'as', 'ct', 'cd', 'ht', 'de', 'bl', 'ev', 'sk'].map(st => (
                <div key={st} className="form-group">
                  <label className="form-label" style={{ fontSize: '0.7rem' }}>{st.toUpperCase()}</label>
                  <input type={st === 'as' ? 'number' : 'text'} step={st === 'as' ? '0.01' : '1'} className="form-input" style={{ padding: '4px', fontSize: '0.8rem' }} value={form.stats[st] || ''} onChange={e => setStat(st, e.target.value)} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Notas</label>
          <textarea className="form-textarea" value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Deck info, skills..." />
        </div>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancelar</button>
          <button className="btn btn-primary" onClick={() => onSave(form)}>{isEdit ? 'Salvar' : 'Adicionar'}</button>
        </div>
      </div>
    </div>
  );
}

export default function Digimons({ tamer, addDigimon, updateDigimon, deleteDigimon }) {
  const [modal, setModal] = useState(null); // null | 'add' | digimon obj
  const digimons = tamer.digimons || [];

  const handleSave = (form) => {
    if (modal && modal.id) {
      updateDigimon(modal.id, form);
    } else {
      addDigimon(form);
    }
    setModal(null);
  };

  return (
    <div className="section-enter">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2>Digimons & Builds</h2>
          <p>Seus Digimons e builds</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}>+ Adicionar</button>
      </div>

      {digimons.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🐉</div>
          <p>Nenhum Digimon adicionado ainda</p>
          <p style={{ marginTop: 8, fontSize: '0.8rem' }}>Clique em &quot;+ Adicionar&quot; para cadastrar</p>
        </div>
      ) : (
        <div className="digi-grid">
          {digimons.map(d => {
            const cls = CLASSES.find(c => c.id === d.class);
            const attr = ATTRIBUTES.find(a => a.id === d.attribute);
            return (
              <div className="digi-card" key={d.id}>
                <div className="digi-name">{d.name} <span style={{fontSize: '0.8rem', color: '#888', fontWeight: 'normal'}}>Lv.{d.level} ({d.scale || 100}%)</span></div>
                <div className="digi-meta">
                  <span className="digi-tag tag-rank">{d.rank}</span>
                  <span className="digi-tag tag-class">{cls?.icon || '?'}</span>
                  <span className="digi-tag tag-attr">{attr?.short || '?'}</span>
                  {d.element && d.element !== 'neutral' && (
                    <span className="digi-tag" style={{background: '#1f2937', color: '#e5e7eb'}}>{ELEMENTS.find(e => e.id === d.element)?.icon}</span>
                  )}
                </div>
                {(d.families && d.families.length > 0) && (
                  <div style={{ display: 'flex', gap: '4px', marginTop: '6px', flexWrap: 'wrap' }}>
                    {d.families.map(fid => {
                      const f = FAMILIES.find(x => x.id === fid);
                      return f ? <span key={fid} style={{fontSize: '0.65rem', background: '#3b82f6', color: 'white', padding: '2px 6px', borderRadius: '4px'}}>{f.short}</span> : null;
                    })}
                  </div>
                )}
                <div className="digi-stats">
                  <div><span className="stat-label-sm">Level</span><div className="stat-val">{d.level}</div></div>
                  <div><span className="stat-label-sm">Clone</span><div className="stat-val">{d.cloneStatus || '—'}</div></div>
                  <div><span className="stat-label-sm">Trans.</span><div className="stat-val">{d.transcendence || 0}</div></div>
                  <div><span className="stat-label-sm">Attribute</span><div className="stat-val">{attr?.name || '—'}</div></div>
                </div>
                {d.notes && <div className="digi-notes">{d.notes}</div>}
                <div className="digi-actions">
                  <button className="btn btn-outline btn-sm" onClick={() => setModal(d)}>✏️ Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => { if (confirm('Deletar?')) deleteDigimon(d.id); }}>🗑️</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {modal && (
        <DigimonModal
          digimon={modal === 'add' ? null : modal}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
