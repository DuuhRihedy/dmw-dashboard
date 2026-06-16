import { useState } from 'react';
import { NPC_CRAFTING } from '../data/npcCraftingData';

export default function NPCCrafting() {
  const [activeNpc, setActiveNpc] = useState(NPC_CRAFTING[0]?.id || '');
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState('');

  const currentNpc = NPC_CRAFTING.find(n => n.id === activeNpc) || NPC_CRAFTING[0];
  const categories = currentNpc?.categories || [];
  const currentCategoryData = categories[activeCategory];

  const filteredRecipes = currentCategoryData?.recipes.filter(r => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      r.product.toLowerCase().includes(q) ||
      r.materials.some(m => m.toLowerCase().includes(q))
    );
  }) || [];

  if (!currentNpc) return <div>No Crafting Data Available</div>;

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Crafting & NPCs</h2>
        <p>Consult the materials required and crafting costs for various items.</p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem', background: 'var(--bg-card)' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-glow)' }}>{currentNpc.npc}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{currentNpc.description}</p>
      </div>

      {/* NPC Selector */}
      <div className="filter-bar" style={{ marginBottom: '1rem' }}>
        {NPC_CRAFTING.map(npc => (
          <button 
            key={npc.id}
            className={`filter-chip ${activeNpc === npc.id ? 'active' : ''}`}
            onClick={() => { setActiveNpc(npc.id); setActiveCategory(0); setSearch(''); }}
          >
            {npc.npc}
          </button>
        ))}
      </div>

      {/* Categories for active NPC */}
      {categories.length > 0 && (
        <div className="filter-bar" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`filter-chip ${activeCategory === idx ? 'active' : ''}`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => { setActiveCategory(idx); setSearch(''); }}
            >
              {cat.name}
            </button>
          ))}
          <div className="search-wrap" style={{ marginLeft: 'auto' }}>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search product or material..."
              value={search} 
              onChange={e => setSearch(e.target.value)} 
            />
          </div>
        </div>
      )}

      {/* Table */}
      {currentCategoryData && (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>{currentNpc.customHeaders ? currentNpc.customHeaders[0] : 'Production Item'}</th>
                <th>{currentNpc.customHeaders ? currentNpc.customHeaders[1] : 'Material Items'}</th>
                <th style={{ textAlign: 'center' }}>{currentNpc.customHeaders ? currentNpc.customHeaders[2] : 'Cost of Making'}</th>
                {currentCategoryData.recipes.some(r => r.successRate) && (
                  <th style={{ textAlign: 'center' }}>Success Rate</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredRecipes.map((recipe, idx) => (
                <tr key={idx}>
                  <td><strong>{recipe.product}</strong></td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {recipe.materials.map((mat, i) => (
                        <span key={i} style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          color: 'var(--cyan)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          {mat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', color: 'var(--amber)', fontFamily: 'var(--font-mono)' }}>{recipe.cost}</td>
                  {currentCategoryData.recipes.some(r => r.successRate) && (
                    <td style={{ textAlign: 'center', color: recipe.successRate === '100%' ? 'var(--green)' : 'var(--amber)' }}>
                      {recipe.successRate || '-'}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {filteredRecipes.length === 0 && (
            <div className="empty-state">
              <p>No recipes found matching your search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
