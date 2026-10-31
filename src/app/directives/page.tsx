const directives = [
  { title: "Operational Review and Tiered Risk Assessment", owner: "Executive Council", status: "In Review" },
  { title: "Governance Audit Alignment", owner: "Policy and Compliance", status: "Approved" },
  { title: "Cross-Division Coordination Standard", owner: "Operations", status: "Active" },
  { title: "Strategic Resilience Planning", owner: "Security & Risk", status: "Pending" },
];

export default function DirectivesPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">BA</div>
          <div>
            <div className="brand-name">Beast3</div>
            <div className="brand-subtitle">Directive Control</div>
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
          <h2>Directive Ledger</h2>
          <span>Live Status</span>
        </div>

        <div className="directive-grid">
          {directives.map((directive) => (
            <article key={directive.title} className="directive-card">
              <h3>{directive.title}</h3>
              <p>{directive.owner}</p>
              <span className="status-pill">{directive.status}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
