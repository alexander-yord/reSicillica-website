import { BRAND } from '../brand';

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="contact-card">
        <h2 id="contact-title" className="section-title">
          Building {BRAND.name} with strategic partners.
        </h2>
        <p>
          {BRAND.name} is currently seeking conversations with investors, municipalities, solar developers, recycling operators, technology suppliers, and public funding partners.
        </p>
        <div className="hero-actions" style={{ marginTop: '1.2rem' }}>
          <a className="button button--primary" href={`mailto:${BRAND.email}`}>
            Email Alexander
          </a>
        </div>
      </div>
    </section>
  );
}
