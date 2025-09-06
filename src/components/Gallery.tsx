import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample gallery data - in a real app this would come from gallery.json
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    alt: "Luxury hookah setup with golden accessories",
    category: "shisha"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    alt: "Premium cocktails with smoke effects",
    category: "cocktails"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    alt: "Elegant lounge interior with ambient lighting",
    category: "interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559268950-2d7ceb2efa1a?w=800&q=80",
    alt: "Traditional hookah with golden details",
    category: "shisha"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    alt: "Signature cocktail with smoke garnish",
    category: "cocktails"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "VIP lounge seating area",
    category: "interior"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold glow-gold mb-6">
            Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
            Immerse yourself in the ambiance of Caliente through our collection of moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg glass hover-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 hover:bg-black/70"
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary bg-black/50 hover:bg-black/70"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              onClick={nextImage}
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary bg-black/50 hover:bg-black/70"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;