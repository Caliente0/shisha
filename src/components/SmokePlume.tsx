import React from 'react';

const PLUMES = [
  { left: '5%',  w: 100, h: 180, delay: 0,    dur: 9,    drift: '25px'  },
  { left: '18%', w: 140, h: 230, delay: 2.5,  dur: 11,   drift: '-20px' },
  { left: '32%', w: 110, h: 200, delay: 0.8,  dur: 8.5,  drift: '30px'  },
  { left: '47%', w: 165, h: 255, delay: 4,    dur: 12,   drift: '-15px' },
  { left: '62%', w: 120, h: 215, delay: 1.5,  dur: 10,   drift: '20px'  },
  { left: '76%', w: 90,  w2: 90, h: 178, delay: 3.2, dur: 9.5,  drift: '-30px' },
  { left: '88%', w: 130, h: 198, delay: 0.3,  dur: 10.5, drift: '15px'  },
];

const EMBERS = [
  { left: '8%',  sz: 3, delay: 0,   dur: 4.5, drift: '18px'  },
  { left: '15%', sz: 2, delay: 1.2, dur: 5,   drift: '-12px' },
  { left: '24%', sz: 4, delay: 0.5, dur: 3.8, drift: '22px'  },
  { left: '35%', sz: 2, delay: 2.1, dur: 5.5, drift: '-8px'  },
  { left: '44%', sz: 3, delay: 0.9, dur: 4.2, drift: '15px'  },
  { left: '53%', sz: 2, delay: 3,   dur: 4.8, drift: '-20px' },
  { left: '63%', sz: 4, delay: 1.6, dur: 3.5, drift: '25px'  },
  { left: '72%', sz: 2, delay: 0.3, dur: 5.2, drift: '-14px' },
  { left: '81%', sz: 3, delay: 2.5, dur: 4,   drift: '10px'  },
  { left: '90%', sz: 2, delay: 1,   dur: 4.7, drift: '-18px' },
];

export const SmokePlume = () => (
  <div className="smoke-container" aria-hidden="true">
    {/* SVG displacement filter — gives plumes their wavy, organic shape */}
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <filter id="smoke-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.007 0.013"
            numOctaves="3"
            seed="5"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="13s"
              values="0.006 0.011; 0.010 0.016; 0.006 0.011"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>

    {PLUMES.map((p, i) => (
      <div
        key={`plume-${i}`}
        className="smoke-plume"
        style={{
          left: p.left,
          width: `${p.w}px`,
          height: `${p.h}px`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.dur}s`,
          '--drift': p.drift,
        } as React.CSSProperties}
      />
    ))}

    {EMBERS.map((e, i) => (
      <div
        key={`ember-${i}`}
        className="ember"
        style={{
          left: e.left,
          width: `${e.sz}px`,
          height: `${e.sz}px`,
          animationDelay: `${e.delay}s`,
          animationDuration: `${e.dur}s`,
          '--drift': e.drift,
        } as React.CSSProperties}
      />
    ))}
  </div>
);
