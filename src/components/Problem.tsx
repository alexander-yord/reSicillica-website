import { BRAND } from '../brand';

export function Problem() {
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="section-header">
        <h2 id="problem-title" className="section-title">
          Europe’s solar buildout is creating a future wave of end-of-life panels.
        </h2>
        <p className="section-preamble">
          Without dedicated recycling infrastructure, valuable materials risk being exported, downcycled, or lost. {BRAND.name} is positioning itself for the moment when municipalities, utilities, solar park operators, and waste managers need credible local partners.
        </p>
      </div>
      <div className="content-grid">
        <article className="content-card">
          <h3>Why the need is real</h3>
          <ul>
            <li className="list-item">Solar panels contain recoverable materials that remain valuable even after energy generation ends.</li>
            <li className="list-item">Bulgaria and the wider region need local capacity to manage future photovoltaic waste responsibly.</li>
            <li className="list-item">European policy is increasingly focused on circular economy, clean industry, and secure access to critical raw materials.</li>
          </ul>
        </article>
        <article className="content-card">
          <h3>What this means for stakeholders</h3>
          <ul>
            <li className="list-item">Municipalities and regional waste systems will need practical pathways for future PV waste.</li>
            <li className="list-item">Solar developers and operators will need credible end-of-life planning and partner networks.</li>
            <li className="list-item">Investors and public bodies are looking for infrastructure opportunities aligned with green industrial policy.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
