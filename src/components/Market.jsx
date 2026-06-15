import { useState, useMemo } from 'react';
import CraftCalculator from './CraftCalculator';

function parseShopData(raw) {
  const shops = [];
  const lines = raw.split('\n');
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const shopMatch = line.match(/^Shop\s*Name:\s*(.+)/i);
    if (shopMatch) {
      current = { name: shopMatch[1].trim(), owner: '', map: '', items: [] };
      shops.push(current);
      continue;
    }

    if (current) {
      const ownerMatch = line.match(/^Owner:\s*(.+)/i);
      if (ownerMatch) { current.owner = ownerMatch[1].trim(); continue; }

      const mapMatch = line.match(/^Map:\s*(.+)/i);
      if (mapMatch) { current.map = mapMatch[1].trim(); continue; }
    }

    if (line.match(/^[\|\s\-]+$/) || line.match(/Item\s*\|/i)) continue;

    if (line.startsWith('|')) {
      let row = line;
      if (row.startsWith('|')) row = row.substring(1);
      if (row.endsWith('|')) row = row.substring(0, row.length - 1);
      
      const cells = row.split('|').map(c => c.trim());
      
      // Flat table format (Donny): Item | Cost | Quantity | Shop Name | Owner | Map
      if (cells.length >= 6) {
        const itemName = cells[0];
        const costRaw = cells[1] || '0';
        const qty = cells[2] || '?';
        const shopName = cells[3] || 'Unknown Shop';
        const owner = cells[4] || 'Unknown Owner';
        const map = cells[5] || '';

        const cost = parseInt(costRaw.replace(/[,.\s]/g, ''), 10) || 0;
        
        if (itemName && itemName.length > 1 && !itemName.match(/^-+$/)) {
          let shopObj = shops.find(s => s.name === shopName && s.owner === owner);
          if (!shopObj) {
            shopObj = { name: shopName, owner, map, items: [] };
            shops.push(shopObj);
          }
          shopObj.items.push({
            name: itemName,
            cost,
            costDisplay: costRaw,
            quantity: qty,
            shop: shopName,
            owner,
            map
          });
        }
      } 
      // Old format rows: Item | Cost | Quantity
      else if (current && cells.length >= 2) {
        const itemName = cells[0];
        const costRaw = cells[1] || '0';
        const qty = cells[2] || '?';
        const cost = parseInt(costRaw.replace(/[,.\s]/g, ''), 10) || 0;
        if (itemName && itemName.length > 1 && !itemName.match(/^-+$/)) {
          current.items.push({
            name: itemName,
            cost,
            costDisplay: costRaw,
            quantity: qty,
            shop: current.name,
            owner: current.owner,
            map: current.map,
          });
        }
      }
    }
  }
  return shops;
}

function formatCost(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'T';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace('.0', '') + 'M';
  return n + 'B';
}

const SORT_OPTIONS = [
  { id: 'name-asc', label: 'Nome A-Z' },
  { id: 'name-desc', label: 'Nome Z-A' },
  { id: 'cost-asc', label: 'Preço ↑' },
  { id: 'cost-desc', label: 'Preço ↓' },
];

export default function Market({ tamer, updateTamer }) {
  const [activeTab, setActiveTab] = useState('market');
  const [showPaste, setShowPaste] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [wishInput, setWishInput] = useState('');

  const savedShops = tamer.marketShops || [];
  const wishlist = tamer.marketWishlist || [];
  const lastUpdate = tamer.marketLastUpdate || null;

  const allItems = useMemo(() => {
    return savedShops.flatMap(shop =>
      shop.items.map(item => ({ ...item, shop: shop.name, owner: shop.owner, map: shop.map }))
    );
  }, [savedShops]);

  const filtered = useMemo(() => {
    let items = allItems;
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.shop.toLowerCase().includes(q) ||
        i.owner.toLowerCase().includes(q)
      );
    }
    const [field, dir] = sortBy.split('-');
    items = [...items].sort((a, b) => {
      if (field === 'name') return dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      if (field === 'cost') return dir === 'asc' ? a.cost - b.cost : b.cost - a.cost;
      return 0;
    });
    return items;
  }, [allItems, search, sortBy]);

  const wishlistMatches = useMemo(() => {
    if (!wishlist.length || !allItems.length) return [];
    return wishlist.map(w => ({
      wish: w,
      matches: allItems.filter(i => i.name.toLowerCase().includes(w.toLowerCase())),
    })).filter(w => w.matches.length > 0);
  }, [wishlist, allItems]);

  const handleImport = () => {
    if (!pasteText.trim()) return;
    const parsed = parseShopData(pasteText);
    if (parsed.length === 0) return;

    const existing = [...savedShops];
    parsed.forEach(newShop => {
      const idx = existing.findIndex(s => s.name === newShop.name && s.owner === newShop.owner);
      if (idx >= 0) existing[idx] = newShop;
      else existing.push(newShop);
    });

    updateTamer({
      marketShops: existing,
      marketLastUpdate: new Date().toISOString(),
    });
    setPasteText('');
    setShowPaste(false);
  };

  const handleClearAll = () => {
    if (confirm('Limpar TODOS os dados de market?')) {
      updateTamer({ marketShops: [], marketLastUpdate: null });
    }
  };

  const addWish = () => {
    const w = wishInput.trim();
    if (!w || wishlist.includes(w)) return;
    updateTamer({ marketWishlist: [...wishlist, w] });
    setWishInput('');
  };

  const removeWish = (w) => {
    updateTamer({ marketWishlist: wishlist.filter(x => x !== w) });
  };

  return (
    <section className="market-section section-enter">
      <div className="market-header-tabs">
        <h2>🏪 Market & Crafting</h2>
        <div className="guide-tabs" style={{ marginBottom: 0 }}>
          <button 
            className={`guide-tab ${activeTab === 'market' ? 'active' : ''}`}
            onClick={() => setActiveTab('market')}
          >
            🏪 Market Tracker
          </button>
          <button 
            className={`guide-tab ${activeTab === 'craft' ? 'active' : ''}`}
            onClick={() => setActiveTab('craft')}
          >
            ⚒️ Calculadora de Crafting
          </button>
        </div>
      </div>
      
      {activeTab === 'market' && (
        <>
          <p className="section-desc mt-2">
            Cole os dados do canal <strong>#shops-open</strong> do Discord e busque itens aqui.
          </p>

      {/* STATS BAR */}
      <div className="market-stats">
        <div className="market-stat">
          <span className="market-stat-value">{savedShops.length}</span>
          <span className="market-stat-label">Lojas</span>
        </div>
        <div className="market-stat">
          <span className="market-stat-value">{allItems.length}</span>
          <span className="market-stat-label">Itens</span>
        </div>
        <div className="market-stat">
          <span className="market-stat-value">{wishlist.length}</span>
          <span className="market-stat-label">Wishlist</span>
        </div>
        <div className="market-stat">
          <span className="market-stat-value">{lastUpdate ? new Date(lastUpdate).toLocaleDateString('pt-BR') : '—'}</span>
          <span className="market-stat-label">Última Atualização</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="market-actions">
        <button className="btn btn-primary" onClick={() => setShowPaste(v => !v)}>
          {showPaste ? '✕ Fechar' : '📋 Colar Dados do Discord'}
        </button>
        {savedShops.length > 0 && (
          <button className="btn btn-danger btn-sm" onClick={handleClearAll}>🗑️ Limpar Tudo</button>
        )}
      </div>

      {/* PASTE MODAL */}
      {showPaste && (
        <div className="market-paste-area">
          <h3>📋 Cole o texto do #shops-open</h3>
          <p className="paste-hint">
            Copie as mensagens do Donny no Discord (Ctrl+A no canal, Ctrl+C) e cole aqui.
            O parser reconhece o formato: <code>Shop Name / Owner / Map / Item | Cost | Quantity</code>
          </p>
          <textarea
            className="form-textarea"
            placeholder={`Shop Name: MegaX Shop\nOwner: MegaX\nMap: Dats Center (6)\n\n| Item                     | Cost      | Quantity |\n|--------------------------|-----------|----------|\n| MetalSeadramon Seal      | 7,774     | 350      |\n| Houomon Seal             | 118,000   | 50       |`}
            value={pasteText}
            onChange={e => setPasteText(e.target.value)}
            rows={12}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
          />
          <div className="paste-actions">
            <button className="btn btn-primary" onClick={handleImport} disabled={!pasteText.trim()}>
              ✅ Importar {parseShopData(pasteText).length} loja(s) / {parseShopData(pasteText).flatMap(s => s.items).length} item(s)
            </button>
            <button className="btn btn-outline" onClick={() => { setPasteText(''); setShowPaste(false); }}>Cancelar</button>
          </div>
        </div>
      )}

      {/* WISHLIST */}
      <div className="market-wishlist">
        <h3>⭐ Wishlist — Itens que você procura</h3>
        <div className="wish-input-row">
          <input
            type="text"
            className="form-input"
            placeholder="Nome do item que procura..."
            value={wishInput}
            onChange={e => setWishInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addWish()}
          />
          <button className="btn btn-amber btn-sm" onClick={addWish}>+ Adicionar</button>
        </div>
        {wishlist.length > 0 && (
          <div className="wish-tags">
            {wishlist.map(w => (
              <span key={w} className="wish-tag">
                {w}
                <button onClick={() => removeWish(w)}>✕</button>
              </span>
            ))}
          </div>
        )}
        {wishlistMatches.length > 0 && (
          <div className="wish-matches">
            <h4>🎯 Encontrados na market!</h4>
            {wishlistMatches.map(({ wish, matches }) => (
              <div key={wish} className="wish-match-group">
                <span className="wish-match-label">"{wish}" →</span>
                {matches.map((m, i) => (
                  <span key={i} className="wish-match-item">
                    {m.name} — <strong>{formatCost(m.cost)}</strong> (x{m.quantity}) em <em>{m.shop}</em>
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH & FILTER */}
      {allItems.length > 0 && (
        <>
          <div className="market-toolbar">
            <input
              type="text"
              className="guide-search"
              placeholder="🔍 Buscar item, loja ou vendedor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select className="form-select" style={{ width: 'auto', minWidth: 140 }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </div>

          {/* TABLE */}
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Preço</th>
                  <th>Qtd</th>
                  <th>Loja</th>
                  <th>Dono</th>
                  <th>Mapa</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, i) => (
                  <tr key={i}>
                    <td><strong>{item.name}</strong></td>
                    <td>
                      <span className="market-price">{formatCost(item.cost)}</span>
                      <span className="market-price-full">{item.cost.toLocaleString('pt-BR')}</span>
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.shop}</td>
                    <td>{item.owner}</td>
                    <td><span className="market-map">{item.map}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="market-count">{filtered.length} item(s) encontrado(s)</p>
        </>
      )}

      {allItems.length === 0 && !showPaste && (
        <div className="empty-state" style={{ marginTop: 40 }}>
          <div className="empty-icon">🏪</div>
          <p>Nenhum dado de market ainda.</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 8 }}>
            Clique em "📋 Colar Dados do Discord" e cole o conteúdo do canal #shops-open
          </p>
        </div>
      )}
      </>
      )}

      {activeTab === 'craft' && (
        <CraftCalculator tamer={tamer} updateTamer={updateTamer} allItems={allItems} />
      )}
    </section>
  );
}
