import { BRAND } from '../brand';
import { ProcessAnimation } from './Illustrations';

export function Solution() {
  return (
    <section id="solution" className="section" aria-labelledby="solution-title">
      <div className="section-header">
        <h2 id="solution-title" className="section-title">
          A practical first step toward circular solar materials.
        </h2>
        <p className="section-preamble">
          {BRAND.name} is aiming to deploy an existing industrial photovoltaic recycling machine and build the operational foundation for a specialized facility in Bulgaria. The immediate focus is on mechanical separation, material recovery, and credible deployment rather than inventing new hardware from scratch.
        </p>
      </div>
      <div className="hero-grid">
        <div className="illustration-card">
          <ProcessAnimation />
        </div>
        <div className="content-card">
          <h3>Near-term focus</h3>
          <ul>
            <li className="list-item">Mechanical recycling and separation of end-of-life panels.</li>
            <li className="list-item">Recovery of glass, aluminium, copper, and other valuable material streams.</li>
            <li className="list-item">Partnerships with municipalities, solar developers, waste operators, and public funding bodies.</li>
            <li className="list-item">A disciplined path toward advanced recovery, with silicon purification as a later-stage development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
