import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { animationVariants, viewportSettings } from '@/lib/animations';

interface GalleryItem {
  src: string;
  alt: string;
}

export const Gallery = () => {
  const [images, setImages]           = useState<GalleryItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightbox, setLightbox]       = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align:         'center',
    loop:          true,
    skipSnaps:     false,
    dragFree:      false,
  });

  // ── sync dot indicator with carousel ──────────────────────────────────────
  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  // ── load gallery data ──────────────────────────────────────────────────────
  useEffect(() => {
    fetch('/data/gallery.json')
      .then(r => r.json())
      .then(setImages)
      .catch(() => {});
  }, []);

  // ── lightbox helpers ───────────────────────────────────────────────────────
  const openLightbox = (i: number) => {
    setLightbox(i);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };
  const prevLight = () => lightbox !== null && setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1);
  const nextLight = () => lightbox !== null && setLightbox(lightbox === images.length - 1 ? 0 : lightbox + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prevLight();
      if (e.key === 'ArrowRight')  nextLight();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, images.length]);

  if (!images.length) return null;

  return (
    <>
      <section id="gallery" className="relative py-section-mobile md:py-section">
        <div className="absolute inset-0 marble-bg" />
        <div className="absolute inset-0 legibility-overlay" />

        <div className="relative z-10">
          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <motion.div
              {...animationVariants.fadeInUp}
              whileInView={animationVariants.fadeInUp.animate}
              viewport={viewportSettings}
            >
              <p className="small-caps mb-6">Gallery</p>
              <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Experience the
                <br />
                <span className="text-gold-light">Atmosphere</span>
              </h2>
            </motion.div>
          </div>

          {/* ── Carousel ───────────────────────────────────────────────────── */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => {
                const active = i === selectedIndex;
                return (
                  <div
                    key={i}
                    // 85% on mobile → 65% tablet → 52% desktop
                    className="flex-[0_0_85%] sm:flex-[0_0_65%] lg:flex-[0_0_52%] px-3 md:px-4"
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl cursor-pointer group"
                      style={{
                        aspectRatio: '4/3',
                        opacity:   active ? 1 : 0.42,
                        transform: active ? 'scale(1)' : 'scale(0.91)',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        willChange: 'transform, opacity',
                      }}
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* hover overlay + caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div
                        className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
                      >
                        <p className="text-white/90 text-sm font-medium tracking-wide">{img.alt}</p>
                      </div>

                      {/* gold border flash on active */}
                      {active && (
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-light/25 pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Controls ───────────────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-5 mt-10 px-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light/60 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* dot indicators — active dot stretches into a pill */}
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width:      i === selectedIndex ? 24 : 6,
                    height:     6,
                    background: i === selectedIndex ? 'hsl(var(--gold-light))' : 'rgba(255,255,255,0.28)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light/60 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            {...animationVariants.lightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-gold-light hover:text-gold transition-colors min-h-[48px] min-w-[48px] border border-gold-light/20 flex items-center justify-center"
            >
              <X size={22} />
            </button>

            <button
              onClick={e => { e.stopPropagation(); prevLight(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-gold-light hover:text-gold transition-colors min-h-[48px] min-w-[48px] border border-gold-light/20 flex items-center justify-center"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={e => { e.stopPropagation(); nextLight(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-gold-light hover:text-gold transition-colors min-h-[48px] min-w-[48px] border border-gold-light/20 flex items-center justify-center"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              {...animationVariants.lightboxContent}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-w-full max-h-[82vh] object-contain rounded-xl mx-auto block"
              />
              <p className="text-center text-white/50 text-xs tracking-widest uppercase mt-4">
                {lightbox + 1} / {images.length} &nbsp;·&nbsp; {images[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
