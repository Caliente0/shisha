import { useEffect, useRef } from 'react';

export const SmokeEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Create multiple smoke particles with enhanced visibility
    const particles = Array.from({ length: 12 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'smoke-particle';
      
      // Enhanced sizing and positioning
      const size = 80 + Math.random() * 120; // 80-200px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${10 + Math.random() * 80}%`; // Keep away from edges
      particle.style.top = `${10 + Math.random() * 80}%`;
      
      // Stagger animation delays
      particle.style.animationDelay = `${i * 2.3}s`;
      particle.style.animationDuration = `${24 + Math.random() * 12}s`; // 24-36s
      
      container.appendChild(particle);
      return particle;
    });

    // Create enhanced ember particles
    const embers = Array.from({ length: 8 }, (_, i) => {
      const ember = document.createElement('div');
      ember.className = 'ember-particle';
      
      const size = 3 + Math.random() * 4; // 3-7px
      ember.style.width = `${size}px`;
      ember.style.height = `${size}px`;
      ember.style.left = `${20 + Math.random() * 60}%`; // Centered distribution
      ember.style.top = `${20 + Math.random() * 60}%`;
      ember.style.animationDelay = `${Math.random() * 3}s`;
      ember.style.animationDuration = `${1.8 + Math.random() * 1.2}s`; // 1.8-3s
      
      container.appendChild(ember);
      return ember;
    });

    return () => {
      [...particles, ...embers].forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};