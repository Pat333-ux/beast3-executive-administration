const auditEvents = [
  { action: "Quarterly governance review", actor: "Executive Council", time: "04:15 UTC" },
  { action: "Risk register validation", actor: "Security & Risk", time: "06:20 UTC" },
  { action: "Directive approval cycle closed", actor: "Policy & Compliance", time: "09:40 UTC" },
  { action: "Cross-division reporting synchronized", actor: "Operations", time: "11:05 UTC" },
];

export default function AuditPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">BA</div>
          <div>
            <div className="brand-name">Beast3</div>
            <div className="brand-subtitle">Audit Timeline</div>
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
          <h2>Audit History</h2>
          <span>Recorded Activity</span>
        </div>

        <div className="timeline">
          {auditEvents.map((event) => (
            <div key={`${event.action}-${event.time}`} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <strong>{event.action}</strong>
                <span>{event.actor}</span>
                <small>{event.time}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
