const partnerCards = [
  {
    title: 'Investors',
    copy: 'Early exposure to a growing circular-economy infrastructure opportunity with a clear path from feasibility to deployment.'
  },
  {
    title: 'Municipalities',
    copy: 'A local pathway for responsible treatment of future photovoltaic waste and a practical partner for regional planning.'
  },
  {
    title: 'Solar developers and operators',
    copy: 'A credible recycling partner for end-of-life asset planning and material stewardship.'
  },
  {
    title: 'EU and public funding bodies',
    copy: 'Alignment with circularity, resource security, and regional industrial development goals.'
  }
];

export function PartnerValue() {
  return (
    <section className="section" aria-labelledby="partner-value-title">
      <div className="section-header">
        <h2 id="partner-value-title" className="section-title">
          Value for the people shaping this space.
        </h2>
        <p className="section-preamble">
          The business model is intentionally simple and credible: build a real recycling capability, validate material streams, and create a foundation for future higher-value recovery.
        </p>
      </div>
      <div className="value-grid">
        {partnerCards.map((card) => (
          <article key={card.title} className="value-card">
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
