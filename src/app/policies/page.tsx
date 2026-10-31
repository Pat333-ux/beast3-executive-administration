const policyRecords = [
  { title: "Governance Integrity Framework", owner: "Executive Council", status: "Active" },
  { title: "Inter-Division Coordination Standard", owner: "Operations", status: "Approved" },
  { title: "Risk Disclosure and Review Policy", owner: "Security & Risk", status: "Draft" },
  { title: "Executive Directive Traceability", owner: "Administration", status: "Active" },
];

export default function PoliciesPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">BA</div>
          <div>
            <div className="brand-name">Beast3</div>
            <div className="brand-subtitle">Policy Board</div>
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
          <h2>Policy Register</h2>
          <span>Quarterly Review</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Policy</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {policyRecords.map((policy) => (
                <tr key={policy.title}>
                  <td>{policy.title}</td>
                  <td>{policy.owner}</td>
                  <td>
                    <span className="status-pill">{policy.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
