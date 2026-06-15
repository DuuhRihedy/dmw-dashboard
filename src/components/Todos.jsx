import { useState } from 'react';

export default function Todos({ tamer, addTodo, toggleTodo, deleteTodo, updateTamer }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const todos = tamer.todos || [];

  const sorted = [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    const p = { high: 0, medium: 1, low: 2 };
    return (p[a.priority] || 1) - (p[b.priority] || 1);
  });

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text.trim(), priority);
    setText('');
  };

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Notas & To-Do</h2>
        <p>Organize o que precisa fazer no jogo</p>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-title">Adicionar Tarefa</div>
        <div className="todo-input-row">
          <input className="form-input" value={text} onChange={e => setText(e.target.value)}
            placeholder="O que precisa fazer..."
            onKeyDown={e => e.key === 'Enter' && handleAdd()} />
          <select className="form-select" style={{ width: 'auto', minWidth: 110 }}
            value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="high">🔴 Alta</option>
            <option value="medium">🟡 Média</option>
            <option value="low">🟢 Baixa</option>
          </select>
          <button className="btn btn-primary" onClick={handleAdd}>Adicionar</button>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Tarefas</div>
        {sorted.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p>Nenhuma tarefa ainda</p>
          </div>
        ) : (
          sorted.map(t => (
            <div key={t.id} className={`todo-item ${t.done ? 'done' : ''}`}>
              <div className="check-box" style={{ cursor: 'pointer' }}
                onClick={() => toggleTodo(t.id)}>{t.done ? '✓' : ''}</div>
              <span className="todo-text">{t.text}</span>
              <span className={`priority-badge priority-${t.priority}`}>{t.priority}</span>
              <button className="todo-delete" onClick={() => deleteTodo(t.id)}>✕</button>
            </div>
          ))
        )}
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-title">Notas Gerais</div>
        <textarea className="form-textarea" style={{ minHeight: 150 }}
          value={tamer.notes || ''}
          onChange={e => updateTamer({ notes: e.target.value })}
          placeholder="Anotações, tips, o que farmar..." />
      </div>
    </div>
  );
}
