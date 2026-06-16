import { useState, useMemo } from 'react';
import { EQUIPMENT, EQUIP_CATEGORIES, CATEGORY_TYPE } from '../data/equipmentData';

const GROUPS = [...new Set(EQUIP_CATEGORIES.map(c => c.group))];

function renderRow(item, type, isChecked, onToggle, id) {
  const statusClass = isChecked ? 'status-have' : 'status-need';
  const statusIcon = isChecked ? '✅' : '❌';

  switch (type) {
    case 'digivice':
      return (
        <tr key={id} className={isChecked ? 'checked' : ''} onClick={onToggle}>
          <td><span className={`table-status ${statusClass}`}>{statusIcon}</span></td>
          <td><strong>{item.name}</strong></td>
          <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>{item.slots}</td>
          <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.stats}</td>
          <td style={{ fontSize: '0.82rem' }}>{item.obtain}</td>
        </tr>
      );
    case 'spiral':
      return (
        <tr key={id} className={isChecked ? 'checked' : ''} onClick={onToggle}>
          <td><span className={`table-status ${statusClass}`}>{statusIcon}</span></td>
          <td><strong>{item.name}</strong></td>
          <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.stats}</td>
          <td style={{ fontSize: '0.82rem' }}>{item.obtain}</td>
        </tr>
      );
    case 'clothing':
      return (
        <tr key={id} className={isChecked ? 'checked' : ''} onClick={onToggle}>
          <td><span className={`table-status ${statusClass}`}>{statusIcon}</span></td>
          <td><strong>{item.name}</strong></td>
          <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--amber)', textAlign: 'center' }}>{item.applyAtt}</td>
          <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', textAlign: 'center' }}>{item.attrSlot}</td>
          <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.stats}</td>
          <td style={{ fontSize: '0.82rem' }}>{item.obtain}</td>
          <td style={{ textAlign: 'center' }}>{item.recharge}</td>
        </tr>
      );

    case 'costume':
      return (
        <tr key={id} className={isChecked ? 'checked' : ''} onClick={onToggle}>
          <td><span className={`table-status ${statusClass}`}>{statusIcon}</span></td>
          <td><strong>{item.name}</strong></td>
          <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.stats}</td>
          <td style={{ fontSize: '0.82rem' }}>{item.obtain}</td>
        </tr>
      );
    case 'accessory':
      return (
        <tr key={id} className={isChecked ? 'checked' : ''} onClick={onToggle}>
          <td><span className={`table-status ${statusClass}`}>{statusIcon}</span></td>
          <td><strong>{item.name}</strong></td>
          <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', textAlign: 'center' }}>{item.opts}</td>
          <td style={{ textAlign: 'center' }}>{item.numChange}</td>
          <td style={{ fontSize: '0.82rem' }}>{item.obtain}</td>
        </tr>
      );
    default: return null;
  }
}

const COLUMN_HEADERS = {
  digivice: ['', 'Nome', 'Slots', 'Stats', 'Como Obter'],
  spiral: ['', 'Nome', 'Stats', 'Como Obter'],
  clothing: ['', 'Nome', 'Apply%', 'Attr', 'Stats', 'Como Obter', '♻️'],

  costume: ['', 'Nome', 'Effect', 'Como Obter'],
  accessory: ['', 'Nome', 'Opts', 'Num Chg', 'Como Obter'],
};

export default function Equipment({ tamer, toggleCheck }) {
  const [activeGroup, setActiveGroup] = useState(GROUPS[0]);
  const [activeCat, setActiveCat] = useState('digivices');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const groupCats = EQUIP_CATEGORIES.filter(c => c.group === activeGroup);

  const currentCat = groupCats.find(c => c.id === activeCat) || groupCats[0];
  const catId = currentCat?.id || 'digivices';
  const type = CATEGORY_TYPE[catId] || 'digivice';
  const headers = COLUMN_HEADERS[type];
  const items = EQUIPMENT[catId] || [];
  const checked = tamer.checkedEquipment || [];

  const filtered = useMemo(() => {
    return items.map((item, i) => {
      const id = `equip_${catId}_${i}`;
      const isOwned = checked.includes(id);
      return { item, id, isOwned };
    }).filter(({ item, isOwned }) => {
      if (statusFilter === 'checked' && !isOwned) return false;
      if (statusFilter === 'unchecked' && isOwned) return false;
      if (search) {
        const q = search.toLowerCase();
        const text = Object.values(item).join(' ').toLowerCase();
        return text.includes(q);
      }
      return true;
    });
  }, [items, catId, checked, search, statusFilter]);

  const totalItems = items.length;
  const ownedInCat = items.filter((_, i) => checked.includes(`equip_${catId}_${i}`)).length;

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Equipment</h2>
        <p>Todos os equipamentos do DMW — clique para marcar o que você tem</p>
      </div>

      {/* Group tabs */}
      <div className="filter-bar" style={{ marginBottom: 12 }}>
        {GROUPS.map(g => (
          <button key={g}
            className={`filter-chip ${activeGroup === g ? 'active' : ''}`}
            onClick={() => { setActiveGroup(g); setActiveCat(EQUIP_CATEGORIES.find(c => c.group === g)?.id || 'digivices'); setSearch(''); }}>
            {g}
          </button>
        ))}
      </div>

      {/* Sub-category tabs */}
      <div className="filter-bar" style={{ marginBottom: 12 }}>
        {groupCats.map(c => (
          <button key={c.id}
            className={`filter-chip ${activeCat === c.id ? 'active' : ''}`}
            style={{ fontSize: '0.72rem' }}
            onClick={() => { setActiveCat(c.id); setSearch(''); }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Status + search */}
      <div className="filter-bar">
        <button className={`filter-chip ${statusFilter === 'all' ? 'active' : ''}`} onClick={() => setStatusFilter('all')}>
          Todos ({totalItems})
        </button>
        <button className={`filter-chip ${statusFilter === 'checked' ? 'active' : ''}`} onClick={() => setStatusFilter('checked')}>
          ✅ Tenho ({ownedInCat})
        </button>
        <button className={`filter-chip ${statusFilter === 'unchecked' ? 'active' : ''}`} onClick={() => setStatusFilter('unchecked')}>
          ❌ Falta ({totalItems - ownedInCat})
        </button>
        <div className="search-wrap">
          <input type="text" className="search-input" placeholder="Buscar nesta categoria..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.map(({ item, id, isOwned }) =>
              renderRow(item, type, isOwned, () => toggleCheck('checkedEquipment', id), id)
            )}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">⚔️</div>
          <p>Nenhum item encontrado</p>
        </div>
      )}
    </div>
  );
}
