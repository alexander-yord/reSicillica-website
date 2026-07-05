import { BRAND } from '../brand';
import { SolarHeroIllustration } from './Illustrations';

export function Hero() {
  return (
    <section id="vision" className="section section--hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Investor & municipality-ready</span>
          <h1>Recovering tomorrow’s critical materials from today’s solar panels.</h1>
          <p>
            {BRAND.name} is an early-stage Bulgarian clean-tech initiative working to establish regional photovoltaic panel recycling capacity — starting with proven recycling technology and building toward high-value silicon recovery.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Contact the founder
            </a>
            <a className="button button--secondary" href="#roadmap">
              Explore the roadmap
            </a>
          </div>
          <p className="hero-trust">Designed for investors, municipalities, and strategic partners.</p>
        </div>
        <div className="hero-visual illustration-card">
          <SolarHeroIllustration />
        </div>
      </div>
    </section>
  );
}
