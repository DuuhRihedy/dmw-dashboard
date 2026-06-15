export default function ProgressBar({ label, current, total, color = '' }) {
  const pct = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-wrap">
      <div className="progress-info">
        <span className="label">{label}</span>
        <span className="value">{current}/{total} ({pct}%)</span>
      </div>
      <div className="progress-bar">
        <div className={`progress-fill ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
