import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  warmth: number;
  layer: 'base' | 'wisp'; // base = dense puffs; wisp = fast thin tendrils
}

// 9 sources spread across the full width so smoke fills the screen edge-to-edge
const SOURCES = [
  { rx: 0.08, rate: 0.5 },
  { rx: 0.20, rate: 0.7 },
  { rx: 0.32, rate: 0.8 },
  { rx: 0.42, rate: 0.9 },
  { rx: 0.50, rate: 1.0 },
  { rx: 0.58, rate: 0.9 },
  { rx: 0.68, rate: 0.8 },
  { rx: 0.80, rate: 0.7 },
  { rx: 0.92, rate: 0.5 },
];

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef  = useRef<number>(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let particles: Particle[] = [];
    let frame = 0;

    const spawnBase = (rx: number) => {
      // Dense, slow, large puffs — the body of the smoke
      const maxLife = 320 + Math.random() * 280; // 320–600 frames (~5–10 s at 60fps)
      particles.push({
        x:       canvas.width * rx + (Math.random() - 0.5) * 80,
        y:       canvas.height + 20,
        r:       45 + Math.random() * 55,          // start big: 45–100 px
        vx:      (Math.random() - 0.5) * 3.2,      // wide initial horizontal spread
        vy:      -(1.0 + Math.random() * 1.8),      // 1.0–2.8 px/frame upward
        life:    0,
        maxLife,
        warmth:  Math.random() * 0.5,
        layer:   'base',
      });
    };

    const spawnWisp = (rx: number) => {
      // Fast thin tendrils that race to the top, creating the "full room" feel
      const maxLife = 200 + Math.random() * 150;
      particles.push({
        x:       canvas.width * rx + (Math.random() - 0.5) * 120,
        y:       canvas.height + 10,
        r:       20 + Math.random() * 30,           // smaller: 20–50 px
        vx:      (Math.random() - 0.5) * 5.0,       // wider drift
        vy:      -(2.5 + Math.random() * 2.5),      // fast: 2.5–5 px/frame
        life:    0,
        maxLife,
        warmth:  Math.random() * 0.25,
        layer:   'wisp',
      });
    };

    // Pre-warm: seed 260 particles spread across the full vertical range so the
    // screen is filled with smoke from frame 1. vy is negative (upward in canvas
    // coords), so we ADD it to y to move particles toward the top.
    for (let i = 0; i < 260; i++) {
      const src = SOURCES[Math.floor(Math.random() * SOURCES.length)];
      const isWisp = i % 3 === 0;
      if (isWisp) spawnWisp(src.rx);
      else spawnBase(src.rx);

      const ageFactor = Math.random() * 360; // 0–360 virtual frames of aging
      const last = particles[particles.length - 1];
      last.y    += last.vy * ageFactor;                            // vy<0 → moves up
      last.x    += last.vx * ageFactor * 0.25;                    // gentle sideways drift
      last.r     = Math.min(last.r + (isWisp ? 0.55 : 1.10) * ageFactor, 380); // cap radius
      last.life  = ageFactor;
    }

    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ongoing spawn every frame
      SOURCES.forEach(s => {
        // Base puffs — 1–2 per frame
        if (Math.random() < s.rate)       spawnBase(s.rx);
        if (Math.random() < s.rate * 0.5) spawnBase(s.rx);
        // Wisps — occasional
        if (Math.random() < s.rate * 0.25) spawnWisp(s.rx);
      });

      // Cap — keep GPU happy but allow enough for thick coverage
      if (particles.length > 550) particles.splice(0, particles.length - 550);
      particles = particles.filter(p => p.life < p.maxLife);

      // Screen blending: overlapping soft puffs accumulate into dense luminous smoke
      ctx.globalCompositeOperation = 'screen';

      particles.forEach(p => {
        p.life++;
        const t = p.life / p.maxLife;

        // Opacity envelope — lower peak so particles accumulate softly via screen blend
        let opacity: number;
        const isWisp = p.layer === 'wisp';
        const peak = isWisp ? 0.20 : 0.28; // was 0.38 / 0.60 — half the opacity, twice as smooth

        if (t < 0.12) {                                      // longer fade-in (was 0.08)
          opacity = (t / 0.12) * peak;
        } else if (t < 0.58) {
          opacity = peak - (t - 0.12) * peak * 0.38;
        } else {
          opacity = Math.max(0, peak * 0.55 * (1 - t) / 0.42);
        }

        // ---- Physics ----
        // Smooth sin/cos only — no per-frame random term (that was causing frame-to-frame jitter)
        const turb = Math.sin(frame * 0.012 + p.y * 0.008) * 0.22
                   + Math.cos(frame * 0.017 + p.x * 0.006) * 0.14;
        p.vx += turb;
        p.vx *= 0.988;
        p.vy *= 0.9992;

        p.x  += p.vx;
        p.y  += p.vy;
        p.r  += isWisp ? 0.75 : 1.35;

        // ---- Draw ----
        const base = 172 + Math.round(p.warmth * 50);
        const rv   = Math.min(255, base + Math.round(p.warmth * 46));
        const gv   = Math.min(255, base + Math.round(p.warmth * 18));
        const bv   = base;

        // Wider gradient stops → edges feather out much more gradually
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0,    `rgba(${rv},${gv},${bv},${opacity.toFixed(3)})`);
        grad.addColorStop(0.50, `rgba(${rv},${gv},${bv},${(opacity * 0.58).toFixed(3)})`);
        grad.addColorStop(0.82, `rgba(${rv},${gv},${bv},${(opacity * 0.16).toFixed(3)})`);
        grad.addColorStop(1,    'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setVisible(false), 5000);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(exitTimer);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />

          <div className="relative z-10 text-center select-none pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.6, ease: 'easeOut' }}
            >
              <h1 className="heading-primary text-[clamp(4rem,12vw,9rem)] leading-none tracking-tight mb-6">
                Caliente
              </h1>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.9, ease: 'easeOut' }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.05em' }}
              animate={{ opacity: 0.85, letterSpacing: '0.35em' }}
              transition={{ delay: 1.6, duration: 1.2, ease: 'easeOut' }}
              className="small-caps text-base md:text-lg"
            >
              Lounge &amp; Shisha Bar
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 2.3, duration: 1.0 }}
              className="body-primary text-xs md:text-sm mt-4 tracking-widest uppercase"
            >
              Premium shishas · Signature cocktails · Bold flavors
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
