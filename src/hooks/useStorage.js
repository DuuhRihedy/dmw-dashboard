import { useState, useCallback, useEffect } from 'react';
import { useSession } from '../auth';

const KEYS = { TAMERS: 'dmw_tamers', ACTIVE: 'dmw_active_tamer' };

function defaultTamer(name = 'Meu Tamer') {
  return {
    id: 'tamer_' + Date.now(),
    name, server: '', guild: '', class: 'sk', level: 1,
    digimons: [], checkedEquipment: [], checkedTitles: [],
    checkedProgression: [], todos: [], notes: '',
    createdAt: new Date().toISOString(),
  };
}

function loadTamersLocally() {
  try { return JSON.parse(localStorage.getItem(KEYS.TAMERS)) || {}; } catch { return {}; }
}

function saveTamersLocally(t) { localStorage.setItem(KEYS.TAMERS, JSON.stringify(t)); }
function loadActiveId() { return localStorage.getItem(KEYS.ACTIVE) || ''; }
function saveActiveId(id) { localStorage.setItem(KEYS.ACTIVE, id); }

function ensureInit() {
  let t = loadTamersLocally();
  if (Object.keys(t).length === 0) {
    const tamer = defaultTamer();
    t[tamer.id] = tamer;
    saveTamersLocally(t);
    saveActiveId(tamer.id);
  }
  return t;
}

export function useStorage() {
  const [rev, setRev] = useState(0);
  const bump = useCallback(() => setRev(r => r + 1), []);

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const tamers = ensureInit();
  let activeId = loadActiveId();
  if (!tamers[activeId]) {
    activeId = Object.keys(tamers)[0] || '';
    saveActiveId(activeId);
  }
  const tamer = tamers[activeId] || null;

  useEffect(() => {
    if (userId) {
      fetch(`/api/profile/${userId}`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          if (data && data.tamers && Object.keys(data.tamers).length > 0) {
            saveTamersLocally(data.tamers);
            if (data.activeId) saveActiveId(data.activeId);
            setRev(r => r + 1);
          }
        }).catch(e => console.error('DB Sync Error:', e));
    }
  }, [userId]);

  const saveTamersSync = useCallback((t) => {
    saveTamersLocally(t);
    if (userId) {
      fetch(`/api/profile/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ tamers: t, activeId: loadActiveId() })
      }).catch(console.error);
    }
  }, [userId]);

  const setActiveTamer = useCallback((id) => { saveActiveId(id); bump(); }, [bump]);

  const updateTamer = useCallback((updates) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (t[aid]) { Object.assign(t[aid], updates); saveTamersSync(t); bump(); }
  }, [bump, saveTamersSync]);

  const createTamer = useCallback((name) => {
    const t = loadTamersLocally();
    const nt = defaultTamer(name);
    t[nt.id] = nt;
    saveTamersSync(t);
    saveActiveId(nt.id);
    bump();
    return nt;
  }, [bump, saveTamersSync]);

  const deleteTamer = useCallback((id) => {
    const t = loadTamersLocally();
    delete t[id];
    saveTamersSync(t);
    const remaining = Object.keys(t);
    if (loadActiveId() === id) saveActiveId(remaining[0] || '');
    bump();
  }, [bump, saveTamersSync]);

  const toggleCheck = useCallback((listKey, itemId) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    const list = t[aid][listKey] || [];
    const idx = list.indexOf(itemId);
    if (idx === -1) list.push(itemId); else list.splice(idx, 1);
    t[aid][listKey] = list;
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const isChecked = useCallback((listKey, itemId) => {
    return (tamer?.[listKey] || []).includes(itemId);
  }, [tamer]);

  const addDigimon = useCallback((digi) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    t[aid].digimons = t[aid].digimons || [];
    t[aid].digimons.push({ id: 'digi_' + Date.now(), ...digi });
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const updateDigimon = useCallback((digiId, updates) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    const d = (t[aid].digimons || []).find(x => x.id === digiId);
    if (d) Object.assign(d, updates);
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const deleteDigimon = useCallback((digiId) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    t[aid].digimons = (t[aid].digimons || []).filter(x => x.id !== digiId);
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const addTodo = useCallback((text, priority = 'medium') => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    t[aid].todos = t[aid].todos || [];
    t[aid].todos.push({ id: 'todo_' + Date.now(), text, priority, done: false });
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const toggleTodo = useCallback((todoId) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    const todo = (t[aid].todos || []).find(x => x.id === todoId);
    if (todo) todo.done = !todo.done;
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const deleteTodo = useCallback((todoId) => {
    const t = loadTamersLocally();
    const aid = loadActiveId();
    if (!t[aid]) return;
    t[aid].todos = (t[aid].todos || []).filter(x => x.id !== todoId);
    saveTamersSync(t);
    bump();
  }, [bump, saveTamersSync]);

  const exportData = useCallback(() => {
    const data = { tamers: loadTamersLocally(), activeTamer: loadActiveId(), exportedAt: new Date().toISOString(), version: '2.0' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmw-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const importData = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.tamers) {
            saveTamersSync(data.tamers);
            if (data.activeTamer) saveActiveId(data.activeTamer);
            bump();
            resolve(data);
          } else reject(new Error('Invalid backup file'));
        } catch (err) { reject(err); }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }, [bump]);

  const resetAll = useCallback(() => {
    localStorage.removeItem(KEYS.TAMERS);
    localStorage.removeItem(KEYS.ACTIVE);
    ensureInit();
    bump();
  }, [bump]);

  return {
    tamers, tamer, activeId,
    setActiveTamer, updateTamer, createTamer, deleteTamer,
    toggleCheck, isChecked,
    addDigimon, updateDigimon, deleteDigimon,
    addTodo, toggleTodo, deleteTodo,
    exportData, importData, resetAll,
  };
}
