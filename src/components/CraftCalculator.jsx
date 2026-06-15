import { useState, useMemo } from 'react';
import { PREBUILT_RECIPES } from '../data/recipesData';

function formatCost(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace('.0', '') + 'B';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace('.0', '') + 'K';
  return String(n);
}

function getRouteMaterials(targetRecipe, baseItemName, allRecipes) {
  let totalRouteFee = 0;
  const materialsMap = {}; // { name: qty }

  function traverse(recipeName, qtyNeeded, path) {
    if (path.includes(recipeName)) return; // cycle detection
    
    // Se o item for o item base, o usuário já possui, não craftamos
    if (baseItemName && recipeName.toLowerCase() === baseItemName.toLowerCase()) {
      materialsMap[recipeName] = (materialsMap[recipeName] || 0) + qtyNeeded;
      return; 
    }

    const recipe = allRecipes.find(r => r.name.toLowerCase() === recipeName.toLowerCase());
    
    if (recipe) {
      totalRouteFee += (recipe.feeTeras || 0) * qtyNeeded;
      recipe.components.forEach(comp => {
         traverse(comp.name, comp.qty * qtyNeeded, [...path, recipeName]);
      });
    } else {
      // Raw material
      materialsMap[recipeName] = (materialsMap[recipeName] || 0) + qtyNeeded;
    }
  }

  totalRouteFee += (targetRecipe.feeTeras || 0);
  targetRecipe.components.forEach(comp => {
    traverse(comp.name, comp.qty, [targetRecipe.name]);
  });

  const consolidatedComps = Object.entries(materialsMap).map(([name, qty]) => {
    const originalComp = targetRecipe.components.find(c => c.name === name);
    return { name, qty, manualPrice: originalComp ? originalComp.manualPrice : null, isBase: name.toLowerCase() === baseItemName?.toLowerCase() };
  });

  return { consolidatedComps, totalRouteFee };
}

export default function CraftCalculator({ tamer, updateTamer, allItems }) {
  const recipes = tamer.recipes || [];
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  // Form states for new/edit recipe
  const [editing, setEditing] = useState(false);
  const [rName, setRName] = useState('');
  const [rFee, setRFee] = useState(0); // Crafting fee in Teras
  const [rComps, setRComps] = useState([]); // { name, qty, manualPrice: null }

  // Route mode states
  const [routeMode, setRouteMode] = useState(false);
  const [baseItem, setBaseItem] = useState('');
  
  // Category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(PREBUILT_RECIPES.map(r => r.category || 'Outros'));
    return Array.from(cats).sort();
  }, []);

  const activeRecipe = useMemo(() => {
    if (!activeRecipeId) return null;
    if (activeRecipeId.startsWith('PREBUILT_')) {
      const name = activeRecipeId.replace('PREBUILT_', '');
      return PREBUILT_RECIPES.find(r => r.name === name);
    }
    return recipes.find(r => r.id === activeRecipeId);
  }, [activeRecipeId, recipes]);

  const handleSaveRecipe = () => {
    if (!rName.trim() || rComps.length === 0) return alert('Dê um nome e adicione pelo menos 1 componente.');
    const newRecipe = {
      id: activeRecipeId || Date.now().toString(),
      name: rName.trim(),
      feeTeras: rFee,
      components: rComps.filter(c => c.name.trim() && c.qty > 0)
    };
    
    let nextRecipes;
    if (activeRecipeId && !activeRecipeId.startsWith('PREBUILT_')) {
      // Edit existing custom recipe
      nextRecipes = recipes.map(r => r.id === activeRecipeId ? newRecipe : r);
    } else {
      // Save new custom recipe (or cloned from prebuilt)
      newRecipe.id = Date.now().toString();
      nextRecipes = [...recipes, newRecipe];
    }
    
    updateTamer({ recipes: nextRecipes });
    setEditing(false);
    setActiveRecipeId(newRecipe.id);
  };

  const startNew = () => {
    setActiveRecipeId(null);
    setRName('');
    setRFee(0);
    setRComps([{ name: '', qty: 1, manualPrice: null }]);
    setEditing(true);
  };

  const editCurrent = () => {
    if (!activeRecipe) return;
    setRName(activeRecipe.name);
    setRFee(activeRecipe.feeTeras || 0);
    setRComps([...activeRecipe.components]);
    setEditing(true);
  };

  const deleteCurrent = () => {
    if (!activeRecipe || !confirm('Excluir esta receita?')) return;
    updateTamer({ recipes: recipes.filter(r => r.id !== activeRecipeId) });
    setActiveRecipeId(null);
    setEditing(false);
  };

  const addComp = () => setRComps([...rComps, { name: '', qty: 1, manualPrice: null }]);
  const updateComp = (idx, field, val) => {
    const next = [...rComps];
    next[idx][field] = val;
    setRComps(next);
  };
  const removeComp = (idx) => {
    setRComps(rComps.filter((_, i) => i !== idx));
  };

  // --- CALCULATOR LOGIC ---
  const calculation = useMemo(() => {
    if (!activeRecipe) return null;
    
    let compsToCalculate = activeRecipe.components;
    let feeCost = (activeRecipe.feeTeras || 0) * 1_000_000_000;
    
    if (routeMode) {
      const allRecipes = [...PREBUILT_RECIPES, ...recipes];
      const { consolidatedComps, totalRouteFee } = getRouteMaterials(activeRecipe, baseItem, allRecipes);
      compsToCalculate = consolidatedComps;
      feeCost = totalRouteFee * 1_000_000_000;
    }

    let totalCraft = feeCost;
    const compsCalc = compsToCalculate.map(comp => {
      // Find cheapest in market
      const matches = allItems.filter(i => i.name.toLowerCase().includes(comp.name.toLowerCase()));
      matches.sort((a, b) => a.cost - b.cost);
      
      const cheapest = matches.length > 0 ? matches[0].cost : null;
      const unitCost = comp.manualPrice !== null ? comp.manualPrice : cheapest;
      // Base items we already have cost 0
      const actualUnitCost = comp.isBase ? 0 : unitCost;
      const compTotal = actualUnitCost !== null ? actualUnitCost * comp.qty : 0;
      
      totalCraft += compTotal;
      
      return {
        ...comp,
        cheapestFound: cheapest,
        usedCost: unitCost,
        total: compTotal,
        hasMarketData: matches.length > 0
      };
    });

    // Find Final Item in market
    const finalMatches = allItems.filter(i => i.name.toLowerCase().includes(activeRecipe.name.toLowerCase()));
    finalMatches.sort((a, b) => a.cost - b.cost);
    const finalItemCost = finalMatches.length > 0 ? finalMatches[0].cost : null;

    let difference = null;
    let isCraftCheaper = null;
    if (finalItemCost !== null && totalCraft > 0) {
      difference = Math.abs(finalItemCost - totalCraft);
      isCraftCheaper = totalCraft < finalItemCost;
    }

    return { compsCalc, feeCost, totalCraft, finalItemCost, difference, isCraftCheaper };
  }, [activeRecipe, allItems, routeMode, baseItem, recipes]);

  return (
    <div className="craft-calc">
      <div className="calc-header">
        <div className="calc-selector" style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 1000, flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1, minWidth: 200 }}>
            <label className="form-label">📂 Categoria do NPC:</label>
            <select 
              className="form-select" 
              value={selectedCategory} 
              onChange={e => {
                setSelectedCategory(e.target.value);
                setActiveRecipeId(null);
              }}
            >
              <option value="All">🌟 Todas as Oficiais</option>
              <option value="Custom">📝 Suas Personalizadas</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="form-group" style={{ flex: 1, minWidth: 150 }}>
            <label className="form-label">💎 Tipo de Item:</label>
            <select 
              className="form-select" 
              value={selectedType} 
              onChange={e => {
                setSelectedType(e.target.value);
                setActiveRecipeId(null);
              }}
            >
              <option value="All">Todos</option>
              <option value="Ring">Ring (Anel)</option>
              <option value="Necklace">Necklace (Colar)</option>
              <option value="Earring">Earring (Brinco)</option>
              <option value="Bracelet">Bracelet (Bracelete)</option>
              <option value="KeyRing">KeyRing (Chaveiro)</option>
            </select>
          </div>

          <div className="form-group" style={{ flex: 2, minWidth: 250 }}>
            <label className="form-label">🔍 Selecione o item que deseja calcular:</label>
            <select 
              className="form-select" 
              value={activeRecipeId || ''} 
              onChange={e => {
                setActiveRecipeId(e.target.value);
                setEditing(false);
              }}
            >
              <option value="" disabled>-- Selecione um Item --</option>
              {selectedCategory === 'Custom' ? (
                recipes
                  .filter(r => {
                    if (selectedType === 'All') return true;
                    const n = r.name.toLowerCase();
                    if (selectedType === 'Earring') return n.includes('earring');
                    if (selectedType === 'KeyRing') return n.includes('keyring');
                    if (selectedType === 'Ring') return n.includes('ring') && !n.includes('earring') && !n.includes('keyring');
                    if (selectedType === 'Necklace') return n.includes('neck');
                    if (selectedType === 'Bracelet') return n.includes('brace');
                    return true;
                  })
                  .map(r => <option key={r.id} value={r.id}>{r.name}</option>)
              ) : (
                PREBUILT_RECIPES
                  .filter(pr => {
                    const catMatch = selectedCategory === 'All' || (pr.category || 'Outros') === selectedCategory;
                    if (!catMatch) return false;
                    if (selectedType === 'All') return true;
                    const n = pr.name.toLowerCase();
                    if (selectedType === 'Earring') return n.includes('earring');
                    if (selectedType === 'KeyRing') return n.includes('keyring');
                    if (selectedType === 'Ring') return n.includes('ring') && !n.includes('earring') && !n.includes('keyring');
                    if (selectedType === 'Necklace') return n.includes('neck');
                    if (selectedType === 'Bracelet') return n.includes('brace');
                    return true;
                  })
                  .map((pr, i) => (
                    <option key={`prebuilt-${pr.name}`} value={`PREBUILT_${pr.name}`}>{pr.name} (Taxa: {pr.feeTeras}T)</option>
                  ))
              )}
            </select>
          </div>
        </div>
        <div className="calc-header-actions" style={{ alignSelf: 'flex-end', paddingBottom: 4 }}>
          <button className="btn btn-primary" onClick={startNew}>+ Nova Custom</button>
          {activeRecipe && !editing && (
            <>
              <button className="btn btn-outline" onClick={editCurrent}>✏️ Editar/Clonar</button>
              {!activeRecipeId.startsWith('PREBUILT_') && (
                <button className="btn btn-danger" onClick={deleteCurrent}>🗑️</button>
              )}
            </>
          )}
        </div>
      </div>

      {editing && (
        <div className="recipe-editor card">
          <h3 className="card-title">{activeRecipeId && !activeRecipeId.startsWith('PREBUILT_') ? 'Editar Receita Personalizada' : 'Criar Nova Receita Customizada'}</h3>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: 2, minWidth: 250 }}>
              <label className="form-label">Nome do Item Final (ex: Spiral KeyRing [AA] Lv.9)</label>
              <input type="text" className="form-input" value={rName} onChange={e => setRName(e.target.value)} />
            </div>
            <div className="form-group" style={{ flex: 1, minWidth: 150 }}>
              <label className="form-label">Taxa de Craft (Teras)</label>
              <input type="number" className="form-input" value={rFee} onChange={e => setRFee(parseInt(e.target.value) || 0)} />
            </div>
          </div>
          
          <div className="components-list">
            <label className="form-label">Componentes Necessários:</label>
            {rComps.map((c, i) => (
              <div key={i} className="comp-row">
                <input 
                  type="text" className="form-input" placeholder="Nome do componente (ex: Spiral KeyRing Lv.8)" 
                  value={c.name} onChange={e => updateComp(i, 'name', e.target.value)} 
                />
                <input 
                  type="number" className="form-input comp-qty" min="1" 
                  value={c.qty} onChange={e => updateComp(i, 'qty', parseInt(e.target.value) || 1)} 
                  title="Quantidade"
                />
                <button className="btn btn-danger btn-sm" onClick={() => removeComp(i)}>✕</button>
              </div>
            ))}
            <button className="btn btn-outline btn-sm mt-2" onClick={addComp}>+ Adicionar Componente</button>
          </div>

          <div className="editor-actions mt-4" style={{ display: 'flex', gap: 8, marginTop: 20 }}>
            <button className="btn btn-primary" onClick={handleSaveRecipe}>💾 Salvar Receita</button>
            <button className="btn btn-outline" onClick={() => setEditing(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {!editing && activeRecipe && (
        <div className="card mb-4" style={{ marginBottom: 16, backgroundColor: 'rgba(59, 130, 246, 0.05)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input 
              type="checkbox" 
              id="routeMode" 
              checked={routeMode} 
              onChange={e => setRouteMode(e.target.checked)} 
              style={{ width: 18, height: 18, cursor: 'pointer' }}
            />
            <label htmlFor="routeMode" style={{ fontWeight: 600, color: 'var(--cyan)', cursor: 'pointer' }}>
              🚀 Calcular Rota de Craft (Multi-níveis)
            </label>
          </div>
          
          {routeMode && (
            <div style={{ marginTop: 12, paddingLeft: 30 }}>
              <label className="form-label text-sm text-gray-400">Qual item base você JÁ POSSUI? (Deixe em branco para craftar do zero)</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Ex: Spiral KeyRing [AA] Lv.3" 
                value={baseItem}
                onChange={e => setBaseItem(e.target.value)}
                style={{ maxWidth: 400 }}
              />
            </div>
          )}
        </div>
      )}

      {!editing && activeRecipe && calculation && (
        <div className="recipe-result">
          <div className="result-cards">
            <div className="stat-card">
              <div className="stat-label">Custo para Craftar</div>
              <div className="stat-value">{formatCost(calculation.totalCraft)}</div>
              {calculation.feeCost > 0 && (
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  Inclui taxa total de {formatCost(calculation.feeCost)} Bits ({(calculation.feeCost / 1_000_000_000).toFixed(1)}T)
                </div>
              )}
            </div>
            <div className="stat-card">
              <div className="stat-label">Preço do {activeRecipe.name} no Market</div>
              <div className="stat-value" style={{ color: calculation.finalItemCost ? 'var(--cyan)' : 'var(--text-muted)' }}>
                {calculation.finalItemCost ? formatCost(calculation.finalItemCost) : 'Não encontrado'}
              </div>
            </div>
            {calculation.difference !== null && (
              <div className="stat-card" style={{ borderColor: calculation.isCraftCheaper ? 'var(--green)' : 'var(--red)' }}>
                <div className="stat-label">Veredito</div>
                <div className="stat-value" style={{ color: calculation.isCraftCheaper ? 'var(--green)' : 'var(--red)' }}>
                  {calculation.isCraftCheaper ? 'Craftar é mais barato' : 'Comprar é mais barato'}
                </div>
                <div className="stat-label" style={{ marginTop: 4 }}>
                  Economia de: <strong>{formatCost(calculation.difference)}</strong>
                </div>
              </div>
            )}
          </div>

          <div className="table-wrap mt-4" style={{ marginTop: 24 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Qtd</th>
                  <th>Menor Preço (Market)</th>
                  <th>Preço Usado (Unit.)</th>
                  <th>Custo Total</th>
                </tr>
              </thead>
              <tbody>
                {calculation.compsCalc.map((comp, i) => (
                  <tr key={i} style={comp.isBase ? { opacity: 0.7, backgroundColor: 'rgba(34, 197, 94, 0.05)' } : {}}>
                    <td>
                      <strong>{comp.name}</strong>
                      {comp.isBase && <span className="ml-2 text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Você já tem</span>}
                    </td>
                    <td>x{comp.qty}</td>
                    <td>
                      {comp.isBase ? (
                        <span className="text-gray-500">-</span>
                      ) : comp.hasMarketData ? (
                        <span className="market-price">{formatCost(comp.cheapestFound)}</span>
                      ) : (
                        <span className="badge-missing">Falta dado</span>
                      )}
                    </td>
                    <td>
                      {!comp.isBase && (
                        <div className="manual-price-input">
                        <input 
                          type="number" 
                          className="form-input input-sm" 
                          placeholder={comp.cheapestFound || '0'}
                          value={comp.manualPrice !== null ? comp.manualPrice : ''}
                          onChange={e => {
                            const val = e.target.value ? parseInt(e.target.value, 10) : null;
                            const nextR = { ...activeRecipe };
                            nextR.components[i].manualPrice = val;
                            updateTamer({ recipes: recipes.map(r => r.id === activeRecipe.id ? nextR : r) });
                          }}
                          title="Digite um preço manual se o mercado não tiver o item"
                        />
                      </div>
                      )}
                    </td>
                    <td><strong style={{ color: 'var(--amber)' }}>{formatCost(comp.total)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="section-desc mt-2" style={{ marginTop: 8 }}>
            Dica: Se um componente estiver com "Falta dado", você pode digitar um valor aproximado na coluna "Preço Usado" para não quebrar a conta final.
          </p>
        </div>
      )}

      {!editing && recipes.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">⚒️</div>
          <p>Você ainda não tem nenhuma receita cadastrada.</p>
          <button className="btn btn-primary mt-2" style={{ marginTop: 16 }} onClick={startNew}>Criar Primeira Receita</button>
        </div>
      )}
    </div>
  );
}
