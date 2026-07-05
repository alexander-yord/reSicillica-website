import { BRAND } from '../brand';

export function Team() {
  return (
    <section id="team" className="section" aria-labelledby="team-title">
      <div className="section-header">
        <h2 id="team-title" className="section-title">
          Building the foundation with a focused founder team.
        </h2>
        <p className="section-preamble">
          The current team is intentionally lean and flexible, with room to add advisors and technical partners as the concept matures.
        </p>
      </div>
      <div className="team-grid">
        <img className="team-image" src="/founder-alex.jpeg" alt="Portrait placeholder for Alex Yordanov" />
        <article className="team-card">
          <h3>Alexander Yordanov</h3>
          <p className="eyebrow">Founder</p>
          <p>
            Alexander Yordanov is a US-educated researcher and data analyst with a background in mathematical statistics, business analytics, and technical project development. He has studied and worked across Bulgaria and the United States, combining rigorous analytical training with experience in client-facing analytics, research, and early-stage venture development. Through {BRAND.name}, he is exploring how Bulgaria can build scalable circular-economy infrastructure for the next generation of solar waste and recovered critical materials.
          </p>
          <a className="button button--secondary" href={`mailto:${BRAND.email}`}>
            Email Alexander
          </a>
        </article>
      </div>
    </section>
  );
}
