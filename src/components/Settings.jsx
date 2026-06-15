import { useState, useEffect } from 'react';
import { CLASSES } from '../data/gameData';

export default function Settings({ tamer, tamers, updateTamer, createTamer, deleteTamer, activeId, exportData, importData, resetAll }) {
  const [form, setForm] = useState({ name: '', server: '', guild: '', class: 'sk', level: 1 });

  useEffect(() => {
    if (tamer) {
      setForm({
        name: tamer.name || '', server: tamer.server || '',
        guild: tamer.guild || '', class: tamer.class || 'sk',
        level: tamer.level || 1,
      });
    }
  }, [tamer, activeId]);

  const handleSave = () => {
    updateTamer({
      name: form.name.trim() || 'Tamer',
      server: form.server.trim(),
      guild: form.guild.trim(),
      class: form.class,
      level: parseInt(form.level) || 1,
    });
  };

  const handleNew = () => {
    const name = prompt('Nome do novo Tamer:');
    if (name) createTamer(name.trim());
  };

  const handleDelete = () => {
    if (Object.keys(tamers).length <= 1) { alert('Precisa ter pelo menos 1 tamer!'); return; }
    if (confirm('Deletar o tamer ativo?')) deleteTamer(activeId);
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importData(file);
      alert('Dados importados com sucesso!');
    } catch (err) { alert('Erro: ' + err.message); }
    e.target.value = '';
  };

  const handleReset = () => {
    if (confirm('ATENÇÃO: Apagar TODOS os dados?')) {
      if (confirm('Última chance! Fez backup?')) resetAll();
    }
  };

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Settings</h2>
        <p>Gerencie seus tamers e dados</p>
      </div>

      <div className="settings-group">
        <h3>Tamer Ativo</h3>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Nome</label>
            <input className="form-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <div className="form-group">
            <label className="form-label">Server</label>
            <input className="form-input" value={form.server} onChange={e => setForm(f => ({ ...f, server: e.target.value }))} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Guild</label>
            <input className="form-input" value={form.guild} onChange={e => setForm(f => ({ ...f, guild: e.target.value }))} />
          </div>
          <div className="form-group">
            <label className="form-label">Classe</label>
            <select className="form-select" value={form.class} onChange={e => setForm(f => ({ ...f, class: e.target.value }))}>
              {CLASSES.map(c => <option key={c.id} value={c.id}>{c.icon} — {c.name}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Level</label>
          <input type="number" className="form-input" style={{ maxWidth: 120 }}
            min="1" max="120" value={form.level}
            onChange={e => setForm(f => ({ ...f, level: e.target.value }))} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>Salvar</button>
      </div>

      <div className="settings-group">
        <h3>Gerenciar Tamers</h3>
        <div className="btn-group" style={{ marginBottom: 16 }}>
          <button className="btn btn-outline" onClick={handleNew}>+ Novo Tamer</button>
          <button className="btn btn-danger" onClick={handleDelete}>🗑️ Deletar Tamer Ativo</button>
        </div>
      </div>

      <div className="settings-group">
        <h3>Backup & Restore</h3>
        <div className="btn-group">
          <button className="btn btn-amber" onClick={exportData}>📦 Exportar JSON</button>
          <label className="btn btn-outline" style={{ cursor: 'pointer' }}>
            📂 Importar JSON
            <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
          </label>
        </div>
        <p style={{ marginTop: 12, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          ⚠️ Dados ficam no navegador (LocalStorage). Faça backup regularmente!
        </p>
      </div>

      <div className="settings-group">
        <h3>Reset</h3>
        <button className="btn btn-danger" onClick={handleReset}>🔄 Resetar Todos os Dados</button>
        <p style={{ marginTop: 8, fontSize: '0.8rem', color: 'var(--red)' }}>
          Isso apaga TUDO. Faça export antes!
        </p>
      </div>
    </div>
  );
}
