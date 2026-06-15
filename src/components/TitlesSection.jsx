import { useState } from 'react';
import { TITLES } from '../data/gameData';
import ProgressBar from './ProgressBar';

export default function TitlesSection({ tamer, toggleCheck, isChecked }) {
  const [collapsed, setCollapsed] = useState({});
  const checked = tamer.checkedTitles || [];

  const allTitles = Object.values(TITLES).flatMap(c => c.items);
  const totalScore = allTitles.reduce((s, t) => s + t.score, 0);

  let earnedScore = 0;
  let gIdx = 0;
  Object.values(TITLES).forEach(cat => {
    cat.items.forEach(() => {
      if (checked.includes('title_' + gIdx)) earnedScore += allTitles[gIdx]?.score || 0;
      gIdx++;
    });
  });

  let globalIdx = 0;

  return (
    <div className="section-enter">
      <div className="section-header">
        <h2>Titles (Conquistas)</h2>
        <p>Títulos que dão Achievement Buffs ao seu Digimon</p>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <ProgressBar label="Títulos Coletados" current={checked.length} total={allTitles.length} color="amber" />
        <ProgressBar label="Score Total" current={earnedScore} total={totalScore} color="green" />
      </div>

      {Object.entries(TITLES).map(([catKey, cat]) => {
        const startIdx = globalIdx;
        const catChecked = cat.items.filter((_, i) => checked.includes('title_' + (startIdx + i))).length;
        const isCollapsed = collapsed[catKey];

        const items = cat.items.map((t, i) => {
          const idx = startIdx + i;
          return { ...t, titleId: 'title_' + idx };
        });
        globalIdx += cat.items.length;

        return (
          <div className="phase-block" key={catKey}>
            <div className="phase-header" onClick={() => setCollapsed(c => ({ ...c, [catKey]: !c[catKey] }))}>
              <h3>{cat.label}</h3>
              <span className="phase-progress">{catChecked}/{cat.items.length}</span>
            </div>
            {!isCollapsed && (
              <div className="phase-body">
                {items.map(t => {
                  const done = checked.includes(t.titleId);
                  return (
                    <div key={t.titleId}
                      className={`check-item ${done ? 'done' : ''}`}
                      onClick={() => toggleCheck('checkedTitles', t.titleId)}>
                      <div className="check-box">{done ? '✓' : ''}</div>
                      <span className="check-text"><strong>{t.name}</strong> — {t.how}</span>
                      <span className="check-meta">+{t.score}</span>
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
