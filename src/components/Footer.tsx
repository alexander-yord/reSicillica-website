import { BRAND } from '../brand';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <strong>{BRAND.name}</strong>
        <p className="footer-text">{BRAND.tagline}</p>
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
        <p className="footer-text">{BRAND.name} is an early-stage concept currently under development.</p>
      </div>
    </footer>
  );
}
