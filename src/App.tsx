import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { WhyNow } from './components/WhyNow';
import { PartnerValue } from './components/PartnerValue';
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <WhyNow />
        <PartnerValue />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
