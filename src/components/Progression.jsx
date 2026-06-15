import { useState } from 'react';
import { PROGRESSION } from '../data/gameData';
import ProgressBar from './ProgressBar';

export default function Progression({ tamer, toggleCheck, isChecked }) {
  const [collapsed, setCollapsed] = useState({});

  const toggle = (phase) => setCollapsed(c => ({ ...c, [phase]: !c[phase] }));

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Progressão</h2>
        <p>Checklist baseado no Core Progression Guide da wiki</p>
      </div>

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
}
