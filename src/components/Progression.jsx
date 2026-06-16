import { useState } from 'react';
import { PROGRESSION } from '../data/gameData';
import { CLASS_BUILDS } from '../data/classGuides';
import ProgressBar from './ProgressBar';
import './Progression.css';

export default function Progression({ tamer, toggleCheck, isChecked }) {
  const [collapsed, setCollapsed] = useState({});
  const [activeMainTab, setActiveMainTab] = useState('meta'); // 'checklist' or 'meta'
  const [activeClass, setActiveClass] = useState('AA');

  const toggle = (phase) => setCollapsed(c => ({ ...c, [phase]: !c[phase] }));

  const renderChecklist = () => (
    <div className="progression-checklist">
      {PROGRESSION.map(phase => {
        const checked = phase.steps.filter(s => isChecked('checkedProgression', s.id)).length;
        const total = phase.steps.length;
        const pct = total ? Math.round((checked / total) * 100) : 0;
        const isCollapsed = collapsed[phase.phase];

        return (
          <div className="phase-block" key={phase.phase}>
            <div className="phase-header" onClick={() => toggle(phase.phase)}>
              <h3>{phase.phase}</h3>
              <span className="phase-progress">{checked}/{total} ({pct}%)</span>
            </div>
            {!isCollapsed && (
              <div className="phase-body">
                <div style={{ padding: '4px 16px' }}>
                  <ProgressBar label="" current={checked} total={total} />
                </div>
                {phase.steps.map(step => {
                  const done = isChecked('checkedProgression', step.id);
                  return (
                    <div key={step.id}
                      className={`check-item ${done ? 'done' : ''}`}
                      onClick={() => toggleCheck('checkedProgression', step.id)}>
                      <div className="check-box">{done ? '✓' : ''}</div>
                      <span className="check-text">{step.text}</span>
                      <span className={`cat-badge cat-${step.cat}`}>{step.cat}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderMetaBuilds = () => {
    const build = CLASS_BUILDS[activeClass];
    if (!build) return null;

    return (
      <div className="meta-build-container">
        <div className="class-selector">
          {Object.keys(CLASS_BUILDS).map(key => {
            const cls = CLASS_BUILDS[key];
            return (
              <button 
                key={key} 
                className={`class-btn ${activeClass === key ? 'active' : ''}`}
                style={{ '--class-color': cls.color }}
                onClick={() => setActiveClass(key)}
              >
                <span className="class-icon">{cls.icon}</span>
                {cls.name}
              </button>
            )
          })}
        </div>

        <div className="build-content" style={{ borderColor: build.color }}>
          <div className="build-grid">
            <div className="build-card">
              <h4>🥚 Seus Digimons</h4>
              <ul className="build-list">
                {build.digimons.map((d, i) => (
                  <li key={i}><strong>{d.label}:</strong> {d.value}</li>
                ))}
              </ul>
            </div>

            <div className="build-card">
              <h4>🃏 A Jornada de Decks</h4>
              <div className="deck-journey">
                {build.decks.map((deck, i) => (
                  <div key={i} className="deck-step">
                    <span className="deck-number">{i + 1}</span>
                    <span className="deck-name">{deck}</span>
                    {i < build.decks.length - 1 && <span className="deck-arrow">⬇️</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="build-card">
              <h4>👕 Seus Equipamentos</h4>
              <ul className="build-list equipment-list">
                {build.equipment.map((eq, i) => (
                  <li key={i}>
                    <span className="eq-icon">{eq.icon}</span>
                    <div className="eq-info">
                      <strong>{eq.label}</strong>
                      <span>{eq.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="build-card">
              <h4>🔮 Foco de Selos</h4>
              <div className="seals-focus">
                {build.seals.map((seal, i) => (
                  <span key={i} className="seal-tag">{seal}</span>
                ))}
              </div>
            </div>

            <div className="build-card full-width">
              <h4>💍 Atributos de Acessórios</h4>
              <div className="accessories-grid">
                {build.accessories.map((acc, i) => (
                  <div key={i} className="accessory-item">
                    <strong>{acc.name}</strong>
                    <span>{acc.stats}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="section-enter progression-wrapper">
      <div className="section-header">
        <h2>Progressão e Meta</h2>
        <p>Acompanhe sua jornada core ou veja as Meta Builds de cada classe.</p>
      </div>

      <div className="progression-tabs">
        <button 
          className={`progression-tab ${activeMainTab === 'meta' ? 'active' : ''}`}
          onClick={() => setActiveMainTab('meta')}
        >
          Meta Builds (Classes)
        </button>
        <button 
          className={`progression-tab ${activeMainTab === 'checklist' ? 'active' : ''}`}
          onClick={() => setActiveMainTab('checklist')}
        >
          Checklist Core
        </button>
      </div>

      {activeMainTab === 'checklist' ? renderChecklist() : renderMetaBuilds()}
    </div>
  );
}
