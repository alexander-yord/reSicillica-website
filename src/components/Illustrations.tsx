export function SolarHeroIllustration() {
  return (
    <svg viewBox="0 0 560 360" role="img" aria-label="Stylized solar panel and recovery streams">
      <defs>
        <linearGradient id="hero-panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7f7f2" />
          <stop offset="100%" stopColor="#dcefe4" />
        </linearGradient>
        <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2d6a4f" />
          <stop offset="100%" stopColor="#6787a2" />
        </linearGradient>
      </defs>
      <rect x="24" y="24" width="512" height="312" rx="28" fill="#fcfdf9" />
      <rect x="70" y="70" width="240" height="150" rx="18" fill="url(#hero-panel)" stroke="#10211c" strokeOpacity="0.15" />
      <rect x="70" y="70" width="240" height="150" rx="18" fill="none" stroke="#10211c" strokeOpacity="0.15" />
      <rect x="95" y="90" width="55" height="110" rx="6" fill="#10211c" fillOpacity="0.08" />
      <rect x="164" y="90" width="55" height="110" rx="6" fill="#10211c" fillOpacity="0.08" />
      <rect x="233" y="90" width="55" height="110" rx="6" fill="#10211c" fillOpacity="0.08" />
      <path d="M385 100h78" stroke="url(#hero-line)" strokeWidth="12" strokeLinecap="round" />
      <path d="M385 140h88" stroke="url(#hero-line)" strokeWidth="12" strokeLinecap="round" />
      <path d="M385 180h70" stroke="url(#hero-line)" strokeWidth="12" strokeLinecap="round" />
      <path className="solar-shimmer" d="M154 302c56-42 110-64 167-64 46 0 100 18 150 52" stroke="#e5f4ea" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle className="panel-glow" cx="442" cy="90" r="18" fill="#f5e4a0" />
      <circle cx="442" cy="90" r="10" fill="#ffffff" />
      <path d="M325 245c14-28 35-50 69-65" stroke="#10211c" strokeOpacity="0.15" strokeWidth="4" strokeLinecap="round" />
      <rect x="102" y="240" width="78" height="46" rx="12" fill="#fcfdf9" stroke="#2d6a4f" strokeOpacity="0.32" />
      <rect x="193" y="240" width="98" height="46" rx="12" fill="#fcfdf9" stroke="#6787a2" strokeOpacity="0.3" />
      <rect x="304" y="240" width="78" height="46" rx="12" fill="#fcfdf9" stroke="#10211c" strokeOpacity="0.16" />
      <text x="112" y="267" fill="#2d6a4f" fontSize="16" fontWeight="700">Glass</text>
      <text x="202" y="267" fill="#6787a2" fontSize="16" fontWeight="700">Aluminium</text>
      <text x="313" y="267" fill="#10211c" fontSize="16" fontWeight="700">Copper</text>
    </svg>
  );
}

export function ProcessAnimation() {
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Photovoltaic panels move through a recycling line and separate into material streams">
      <rect x="30" y="50" width="500" height="240" rx="28" fill="#fcfdf9" />
      <rect x="82" y="100" width="120" height="90" rx="16" fill="#f5f2e7" stroke="#10211c" strokeOpacity="0.12" />
      <rect x="110" y="118" width="64" height="42" rx="10" fill="#dcefe4" />
      <path d="M202 145h72" stroke="#2d6a4f" strokeWidth="10" strokeLinecap="round" />
      <rect x="274" y="100" width="140" height="90" rx="16" fill="#f8faf6" stroke="#10211c" strokeOpacity="0.14" />
      <circle cx="344" cy="145" r="28" fill="#e8f2ea" />
      <path d="M344 122v46M321 145h46" stroke="#10211c" strokeOpacity="0.18" strokeWidth="8" strokeLinecap="round" />
      <path d="M414 145h72" stroke="#6787a2" strokeWidth="10" strokeLinecap="round" />
      <rect x="486" y="98" width="26" height="94" rx="8" fill="#2d6a4f" />
      <rect x="88" y="236" width="70" height="34" rx="10" fill="#f4efe0" stroke="#10211c" strokeOpacity="0.11" />
      <rect x="182" y="236" width="70" height="34" rx="10" fill="#dcefe4" stroke="#10211c" strokeOpacity="0.11" />
      <rect x="276" y="236" width="70" height="34" rx="10" fill="#e8f2ea" stroke="#10211c" strokeOpacity="0.11" />
      <rect x="370" y="236" width="70" height="34" rx="10" fill="#f3efdc" stroke="#10211c" strokeOpacity="0.11" />
      <text x="96" y="257" fill="#2d6a4f" fontSize="13" fontWeight="700">Glass</text>
      <text x="190" y="257" fill="#2d6a4f" fontSize="13" fontWeight="700">Aluminium</text>
      <text x="284" y="257" fill="#6787a2" fontSize="13" fontWeight="700">Copper</text>
      <text x="378" y="257" fill="#10211c" fontSize="13" fontWeight="700">Silver</text>
      <path d="M132 236c18-24 42-40 77-54" stroke="#10211c" strokeOpacity="0.13" strokeWidth="3" strokeLinecap="round" />
      <circle className="material-pill" cx="500" cy="220" r="18" fill="#f5e5af" />
      <circle className="material-pill" cx="467" cy="220" r="18" fill="#dcefe4" />
      <text x="126" y="80" fill="#10211c" fontSize="15" fontWeight="700">PV panel → mechanical recycling line</text>
    </svg>
  );
}

export function CircularFlowIllustration() {
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Recovered materials flow back into European industry and semiconductor supply chains">
      <rect x="28" y="44" width="504" height="232" rx="28" fill="#fcfdf9" />
      <path d="M112 188c47-39 85-60 145-60 35 0 60 8 96 28 37 20 63 33 100 33" stroke="#2d6a4f" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle className="flow-node" cx="112" cy="188" r="26" fill="#dcefe4" />
      <circle className="flow-node" cx="284" cy="128" r="24" fill="#f1e8d6" />
      <circle className="flow-node" cx="458" cy="188" r="26" fill="#e6f0f5" />
      <circle cx="112" cy="188" r="10" fill="#2d6a4f" />
      <circle cx="284" cy="128" r="10" fill="#6787a2" />
      <circle cx="458" cy="188" r="10" fill="#10211c" />
      <rect x="72" y="222" width="90" height="36" rx="10" fill="#f8faf6" stroke="#2d6a4f" strokeOpacity="0.28" />
      <rect x="248" y="160" width="100" height="36" rx="10" fill="#f8faf6" stroke="#6787a2" strokeOpacity="0.28" />
      <rect x="420" y="222" width="98" height="36" rx="10" fill="#f8faf6" stroke="#10211c" strokeOpacity="0.2" />
      <text x="82" y="244" fill="#2d6a4f" fontSize="12" fontWeight="700">Circular packaging</text>
      <text x="258" y="182" fill="#6787a2" fontSize="12" fontWeight="700">Advanced materials</text>
      <text x="430" y="244" fill="#10211c" fontSize="12" fontWeight="700">Semiconductor use</text>
      <path d="M180 188h76" stroke="#10211c" strokeOpacity="0.16" strokeWidth="4" strokeLinecap="round" />
      <path d="M308 128h124" stroke="#10211c" strokeOpacity="0.16" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
