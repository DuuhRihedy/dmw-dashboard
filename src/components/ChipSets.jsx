import { useState } from 'react';
import {
  MS_ATTRIBUTES, ATTR_RANK_STATS,
  CHIPSET_FAMILY, CHIPSET_ALL_FAMILY, DOUBLE_CHIPSET,
  CHIP_FAMILIES, CHIP_INFO,
} from '../data/chipsetData';

function DataTable({ data, title, sticky = false }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {title && <div className="card-title" style={{ marginBottom: 8 }}>{title}</div>}
      <div className="table-wrap" style={{ maxHeight: sticky ? 420 : undefined, overflowY: sticky ? 'auto' : undefined }}>
        <table className="data-table">
          <thead>
            <tr>{data.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    fontFamily: ci > 0 ? 'var(--font-mono)' : undefined,
                    fontSize: '0.78rem',
                    color: ci === 0 ? 'var(--cyan)' : 'var(--text-secondary)',
                    fontWeight: ci === 0 ? 600 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ChipSets() {
  const [tab, setTab] = useState('chipsets');
  const [chipTab, setChipTab] = useState('family');

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>ChipSets & Attributes</h2>
        <p>Referência completa de chipsets, attributes e MS</p>
      </div>

      <div className="filter-bar" style={{ marginBottom: 16 }}>
        <button className={`filter-chip ${tab === 'chipsets' ? 'active' : ''}`} onClick={() => setTab('chipsets')}>
          💎 ChipSets
        </button>
        <button className={`filter-chip ${tab === 'attributes' ? 'active' : ''}`} onClick={() => setTab('attributes')}>
          📊 Equipment Attributes
        </button>
        <button className={`filter-chip ${tab === 'ms' ? 'active' : ''}`} onClick={() => setTab('ms')}>
          🏃 MS Attributes
        </button>
      </div>

      {/* ═══ CHIPSETS ═══ */}
      {tab === 'chipsets' && (
        <>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">Informações</div>
            <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', paddingLeft: 18, lineHeight: 1.8 }}>
              {CHIP_INFO.map((info, i) => <li key={i}>{info}</li>)}
            </ul>
            <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CHIP_FAMILIES.map(f => (
                <span key={f} style={{
                  fontSize: '0.68rem', padding: '3px 10px', borderRadius: 12,
                  background: 'var(--bg-surface)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}>{f}</span>
              ))}
            </div>
          </div>

          <div className="filter-bar" style={{ marginBottom: 12 }}>
            <button className={`filter-chip ${chipTab === 'family' ? 'active' : ''}`} onClick={() => setChipTab('family')}>
              Family ChipSet R
            </button>
            <button className={`filter-chip ${chipTab === 'allfamily' ? 'active' : ''}`} onClick={() => setChipTab('allfamily')}>
              All Family ChipSet R
            </button>
            <button className={`filter-chip ${chipTab === 'double' ? 'active' : ''}`} onClick={() => setChipTab('double')}>
              Double ChipSet (R16-R17)
            </button>
          </div>

          {chipTab === 'family' && <DataTable data={CHIPSET_FAMILY} title="Family ChipSet R — Max Stats (R1→R17)" sticky />}
          {chipTab === 'allfamily' && <DataTable data={CHIPSET_ALL_FAMILY} title="All Family ChipSet R — Max Stats (R1→R17)" sticky />}
          {chipTab === 'double' && <DataTable data={DOUBLE_CHIPSET} title="Double ChipSet — R16 & R17 Combos" sticky />}
        </>
      )}

      {/* ═══ EQUIPMENT ATTRIBUTES ═══ */}
      {tab === 'attributes' && (
        <>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">Como funciona</div>
            <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', paddingLeft: 18, lineHeight: 1.8 }}>
              <li>Attributes são items que se fazem "merge" com Equipment (Gloves, Shoes, Shirts, Pants, Head).</li>
              <li>Precisam ser <strong>analisados</strong> antes do merge — vá ao <strong>Doruphin</strong> (Equipment Management) no DATS Center.</li>
              <li>Só uma porcentagem das stats é aplicada — determinado pelo Apply% da roupa.</li>
              <li>Podem ser obtidos de High Rank Monster Card, Tokyo-Odaiba drops.</li>
              <li>Upgradeable no <strong>Nanomon (Item Craft)</strong>.</li>
            </ul>
          </div>

          <DataTable data={ATTR_RANK_STATS} title="Attribute Rank — Max Stats por Level" sticky />
        </>
      )}

      {/* ═══ MS ATTRIBUTES ═══ */}
      {tab === 'ms' && (
        <>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">MS Attributes (Movement Speed)</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 12 }}>
              Podem ser merged com o equipamento de <strong>[Shoes]</strong>.
            </p>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Rarity</th>
                  <th>Lv Req</th>
                  <th>Range</th>
                  <th>Como Obter</th>
                </tr>
              </thead>
              <tbody>
                {MS_ATTRIBUTES.map((attr, i) => (
                  <tr key={i}>
                    <td><strong>{attr.name}</strong></td>
                    <td>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: 8,
                        background: attr.rarity === 'Epic' ? 'rgba(168,85,247,0.15)' : attr.rarity === 'Legend' ? 'rgba(255,140,0,0.15)' : 'rgba(0,180,216,0.15)',
                        color: attr.rarity === 'Epic' ? '#a855f7' : attr.rarity === 'Legend' ? '#ff8c00' : '#00b4d8',
                      }}>{attr.rarity}</span>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>{attr.lvReq}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--amber)' }}>{attr.range}</td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{attr.obtain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
