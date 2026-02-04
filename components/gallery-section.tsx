"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { featuredImages } from "@/lib/images";

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Use the first 8 images for the featured gallery
  const displayedImages = featuredImages.slice(0, 8);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
            Capturing Magical Moments
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {displayedImages.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden group cursor-pointer h-full min-h-[200px]"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-medium tracking-wide">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] px-4">
            <Image
              src={displayedImages[currentImage] || "/placeholder.svg"}
              alt={`Gallery image ${currentImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
