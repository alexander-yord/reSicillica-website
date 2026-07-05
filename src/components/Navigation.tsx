import { useState } from 'react';

const links = [
  { href: '#vision', label: 'Vision' },
  { href: '#solution', label: 'Solution' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="side-nav" aria-label="Section navigation">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={isOpen}
        aria-controls="section-links"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div id="section-links" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
