import React, { useState, useMemo } from 'react';
import DECKS_DATA from '../data/decksData.json';
import DIGIMONS_DATA from '../data/digimonsData.json';

export default function DeckTracker({ tamer, updateTamer }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('decks'); // 'decks' or 'digimons'
  
  const deckDigimons = tamer.deckDigimons || {};
  const activeDeck = tamer.activeDeck || '';

  // Get all unique digimons from decks + digimonsData
  const allUniqueDigimons = useMemo(() => {
    const set = new Set();
    DECKS_DATA.forEach(d => d.digimon.forEach(digi => set.add(digi)));
    if (Array.isArray(DIGIMONS_DATA)) {
      DIGIMONS_DATA.forEach(d => set.add(d.name));
    }
    return Array.from(set).sort();
  }, []);

  const toggleDigimon = (digimonName) => {
    updateTamer({
      ...tamer,
      deckDigimons: {
        ...deckDigimons,
        [digimonName]: !deckDigimons[digimonName]
      }
    });
  };

  const toggleActiveDeck = (deckName) => {
    updateTamer({
      ...tamer,
      activeDeck: activeDeck === deckName ? '' : deckName
    });
  };

  const filteredDecks = DECKS_DATA.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.digimon.some(digi => digi.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredDigimons = allUniqueDigimons.filter(d => 
    d.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalUnlocked = allUniqueDigimons.filter(d => deckDigimons[d]).length;

  return (
    <div className="card">
      <div className="card-header" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{ margin: 0 }}>🎴 Deck System & Coleção</h2>
          <input 
            type="text" 
            placeholder={viewMode === 'decks' ? "Pesquisar deck, digimon ou buff..." : "Pesquisar digimon..."} 
            className="form-control"
            style={{ maxWidth: 300 }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div style={{ display: 'flex', gap: 16, borderBottom: '1px solid #333', paddingBottom: 16 }}>
          <button 
            className={`btn ${viewMode === 'decks' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setViewMode('decks')}
          >
            📑 Ver Decks
          </button>
          <button 
            className={`btn ${viewMode === 'digimons' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setViewMode('digimons')}
          >
            🐉 Coleção de Digimons ({totalUnlocked}/{allUniqueDigimons.length})
          </button>
        </div>
      </div>

      {viewMode === 'decks' ? (
        <div className="deck-list" style={{ display: 'grid', gap: 16, marginTop: 16 }}>
          {filteredDecks.map((deck, idx) => {
          const unlockedCount = deck.digimon.filter(d => deckDigimons[d]).length;
          const totalCount = deck.digimon.length;
          const isUnlocked = unlockedCount === totalCount && totalCount > 0;
          const isActive = activeDeck === deck.name;

          return (
            <div key={idx} className={`card ${isActive ? 'active-deck' : ''}`} style={{ border: isActive ? '1px solid #3b82f6' : '1px solid #333', background: isActive ? 'rgba(59, 130, 246, 0.05)' : '' }}>
              <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222', paddingBottom: 12, marginBottom: 12 }}>
                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
                  {deck.name} 
                  <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: 12, background: isUnlocked ? 'rgba(74, 222, 128, 0.2)' : 'rgba(161, 161, 170, 0.2)', color: isUnlocked ? '#4ade80' : '#a1a1aa' }}>
                    {unlockedCount}/{totalCount}
                  </span>
                </h3>
                {isUnlocked && (
                  <button 
                    className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => toggleActiveDeck(deck.name)}
                    style={{ padding: '4px 12px', fontSize: '0.9rem' }}
                  >
                    {isActive ? '✅ Deck Ativo' : 'Definir como Ativo'}
                  </button>
                )}
              </div>
              
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: 16, lineHeight: 1.5 }}>{deck.description}</p>
              
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#60a5fa', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Digimons Necessários:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
                    {deck.digimon.map((digi, dIdx) => (
                      <label key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', background: 'rgba(0,0,0,0.2)', padding: '6px 12px', borderRadius: 4, border: deckDigimons[digi] ? '1px solid rgba(74, 222, 128, 0.3)' : '1px solid transparent' }}>
                        <input 
                          type="checkbox" 
                          checked={!!deckDigimons[digi]}
                          onChange={() => toggleDigimon(digi)}
                        />
                        <span style={{ color: deckDigimons[digi] ? '#4ade80' : '#e4e4e7', fontSize: '0.9rem' }}>{digi}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: 250, background: 'rgba(0,0,0,0.2)', padding: 16, borderRadius: 8 }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#f472b6', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Efeitos do Deck:</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, color: '#e4e4e7', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {deck.effects.map((eff, eIdx) => {
                      const isLabel = eff.includes(':');
                      const parts = eff.split(':');
                      return (
                        <li key={eIdx}>
                          {isLabel ? (
                            <>
                              <span style={{ color: '#f472b6', fontWeight: 'bold' }}>{parts[0]}:</span> {parts.slice(1).join(':')}
                            </>
                          ) : eff}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        {filteredDecks.length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: '#a1a1aa' }}>
            Nenhum deck encontrado com esse termo.
          </div>
        )}
        </div>
      ) : (
        <div style={{ marginTop: 16 }}>
          <p style={{ color: '#a1a1aa', marginBottom: 16 }}>
            Marque os Digimons que você já possui. Isso irá preencher automaticamente os requisitos dos Decks na outra aba.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
            {filteredDigimons.map((digi, idx) => {
              const isOwned = !!deckDigimons[digi];
              return (
                <label 
                  key={idx} 
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', 
                    background: isOwned ? 'rgba(74, 222, 128, 0.1)' : 'rgba(0,0,0,0.2)', 
                    padding: '12px 16px', borderRadius: 6, 
                    border: isOwned ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid #333',
                    transition: 'all 0.2s'
                  }}
                >
                  <input 
                    type="checkbox" 
                    style={{ width: 18, height: 18 }}
                    checked={isOwned}
                    onChange={() => toggleDigimon(digi)}
                  />
                  <span style={{ color: isOwned ? '#4ade80' : '#e4e4e7', fontSize: '1rem', fontWeight: isOwned ? 'bold' : 'normal' }}>
                    {digi}
                  </span>
                </label>
              );
            })}
            {filteredDigimons.length === 0 && (
              <div style={{ padding: 40, textAlign: 'center', color: '#a1a1aa', gridColumn: '1 / -1' }}>
                Nenhum digimon encontrado.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
