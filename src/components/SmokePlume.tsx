export const SmokePlume = () => {
  return (
    <>
      {/* Smoke effect container */}
      <div id="smoke">
        <div className="plume"></div>
        <div className="plume"></div>
        <div className="plume"></div>
      </div>

      {/* SVG filter for smoke noise effect (procedural noise) */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="smoke-noise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.006 0.012" 
            numOctaves="2" 
            seed="7"
          >
            <animate 
              attributeName="baseFrequency" 
              dur="14s" 
              values="0.006 0.012; 0.009 0.015; 0.006 0.012" 
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="18" />
        </filter>
      </svg>
    </>
  );
};















