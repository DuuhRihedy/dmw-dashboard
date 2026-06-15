import { useState } from 'react';
import { CLASSES, ATTRIBUTES, RANKS } from '../data/gameData';

function DigimonModal({ digimon, onSave, onClose }) {
  const isEdit = !!digimon;
  const [form, setForm] = useState({
    name: digimon?.name || '',
    rank: digimon?.rank || 'SSS',
    class: digimon?.class || 'sk',
    attribute: digimon?.attribute || 'vaccine',
    level: digimon?.level || 1,
    cloneStatus: digimon?.cloneStatus || 'none',
    transcendence: digimon?.transcendence || 0,
    notes: digimon?.notes || '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

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
            <label className="form-label">Level</label>
            <input type="number" className="form-input" min="1" max="120" value={form.level} onChange={e => set('level', +e.target.value)} />
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
                <div className="digi-name">{d.name}</div>
                <div className="digi-meta">
                  <span className="digi-tag tag-rank">{d.rank}</span>
                  <span className="digi-tag tag-class">{cls?.icon || '?'}</span>
                  <span className="digi-tag tag-attr">{attr?.short || '?'}</span>
                </div>
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
