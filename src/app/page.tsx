const divisions = [
  "Executive Administration",
  "Strategy and Planning",
  "Finance and Resourcing",
  "Security and Risk",
  "Operations and Infrastructure",
  "Policy and Compliance",
  "Communications and Coordination",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Beast3 • Governance Layer</p>
        <h1>Executive Administration Division</h1>
        <p className="subtitle">
          Strategic oversight, policy integrity, and executive operations for the Beast3 ecosystem.
        </p>
      </section>

      <section className="card-grid">
        {divisions.map((division) => (
          <article key={division} className="card">
            <h2>{division}</h2>
            <p>Operationally aligned and managed through the executive governance framework.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
