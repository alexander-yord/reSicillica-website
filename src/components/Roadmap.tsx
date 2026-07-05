const phases = [
  {
    badge: 'Phase 1',
    title: 'Feasibility & validation',
    items: ['Market sizing', 'Feedstock mapping', 'Technology supplier discussions', 'Preliminary unit economics', 'Site and logistics assessment']
  },
  {
    badge: 'Phase 2',
    title: 'Permitting & partnerships',
    items: ['Regulatory pathway', 'Municipal and solar-operator partnerships', 'Waste-management integration', 'EU and public funding strategy']
  },
  {
    badge: 'Phase 3',
    title: 'Facility deployment',
    items: ['Acquisition and installation of existing recycling machinery', 'Initial recycling operations', 'Material stream validation', 'Commercial recycling partnerships']
  },
  {
    badge: 'Phase 4',
    title: 'Advanced materials development',
    items: ['Silicon recovery optimization', 'Silicon purification research', 'Potential expansion toward European critical raw material supply']
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="section" aria-labelledby="roadmap-title">
      <div className="section-header">
        <h2 id="roadmap-title" className="section-title">
          A phased roadmap built around deployment, not invention.
        </h2>
        <p className="section-preamble">
          The recycling machine technology already exists. The work ahead is about validating the opportunity, building the operating foundation, and scaling responsibly.
        </p>
      </div>
      <div className="timeline-grid">
        {phases.map((phase) => (
          <article key={phase.badge} className="timeline-card">
            <span className="badge">{phase.badge}</span>
            <h3>{phase.title}</h3>
            <ul>
              {phase.items.map((item) => (
                <li key={item} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
