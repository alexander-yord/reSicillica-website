import { BRAND } from '../brand';
import { CircularFlowIllustration } from './Illustrations';

export function WhyNow() {
  return (
    <section className="section" aria-labelledby="why-now-title">
      <div className="section-header">
        <h2 id="why-now-title" className="section-title">
          Why Bulgaria, why now.
        </h2>
        <p className="section-preamble">
          Bulgaria is entering a period in which growing solar deployment, regional industrial capacity, and European resource priorities can align around a new circular-economy infrastructure proposition.
        </p>
      </div>
      <div className="stats-grid">
        <article className="stat-card">
          <h3>Regional momentum</h3>
          <p>Solar deployment continues to increase across Bulgaria and Southeast Europe, creating a clear future need for end-of-life management.</p>
        </article>
        <article className="stat-card">
          <h3>Infrastructure gap</h3>
          <p>The region still has limited specialized capability for PV recycling, creating room for a first mover with credible execution.</p>
        </article>
        <article className="stat-card">
          <h3>Industrial positioning</h3>
          <p>A lower-cost industrial base can support early-stage deployment while the company builds toward more advanced recovery.</p>
        </article>
        <article className="stat-card">
          <h3>Policy alignment</h3>
          <p>The concept is aligned with broader European priorities around circularity, resource security, and local clean-tech capability.</p>
        </article>
      </div>
      <div className="hero-grid" style={{ marginTop: '1.4rem' }}>
        <div className="content-card">
          <h3>Strategic fit</h3>
          <p>
            {BRAND.name} is designed as a credible early-stage platform for feasibility, permitting, partnerships, and deployment. The ambition is long-term and European, but the first phase is practical, transparent, and focused on making the first recycling pathway real.
          </p>
        </div>
        <div className="illustration-card">
          <CircularFlowIllustration />
        </div>
      </div>
    </section>
  );
}
