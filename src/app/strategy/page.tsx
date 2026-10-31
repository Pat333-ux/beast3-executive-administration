const strategicObjectives = [
  { name: "Civic Integrity Framework", owner: "Executive Council", status: "In Progress", progress: "72%" },
  { name: "Resilience Expansion", owner: "Security & Risk", status: "Reviewed", progress: "88%" },
  { name: "Operational Harmonization", owner: "Operations", status: "On Track", progress: "81%" },
  { name: "Strategic Resource Allocation", owner: "Finance", status: "Resolved", progress: "94%" },
];

export default function StrategyPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">BA</div>
          <div>
            <div className="brand-name">Beast3</div>
            <div className="brand-subtitle">Strategy Board</div>
          </div>
        </div>
        <nav className="topnav" aria-label="Main navigation">
          <a href="/">Overview</a>
          <a href="/policies">Policies</a>
          <a href="/directives">Directives</a>
          <a href="/strategy">Strategy</a>
          <a href="/audit">Audit</a>
        </nav>
      </header>

      <section className="panel panel-full">
        <div className="panel-header">
          <h2>Strategic Objectives</h2>
          <span>Executive Progress</span>
        </div>

        <div className="objective-grid">
          {strategicObjectives.map((objective) => (
            <article key={objective.name} className="objective-card">
              <h3>{objective.name}</h3>
              <div className="objective-meta">
                <span>{objective.owner}</span>
                <strong>{objective.status}</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: objective.progress }} />
              </div>
              <small>{objective.progress} complete</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
