"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";
import { localVerticalVideos } from "@/lib/local-videos";

export function VideoSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const displayedVideos = localVerticalVideos;

  const openLightbox = (index: number) => {
    setCurrentVideo(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="videos" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Live Performances
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Experience the Energy
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Watch our live performances and see why couples choose Radio
            Prophets for their special day
          </p>
        </div>

        {/* Vertical Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedVideos.map((video, index) => (
            <div
              key={video.title}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-primary/20 hover:border-primary/50"
              onClick={() => openLightbox(index)}
              onMouseEnter={(e) => {
                const videoElement = e.currentTarget.querySelector("video");
                if (videoElement) {
                  videoElement.play().catch(() => { });
                }
              }}
              onMouseLeave={(e) => {
                const videoElement = e.currentTarget.querySelector("video");
                if (videoElement) {
                  videoElement.pause();
                }
              }}
            >
              <video
                src={video.src}
                poster={video.poster}
                className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                preload="none"
                loop
                muted
                playsInline
              />

              {/* Play Button Overlay (Animated Glow) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glass button */}
                  <div className="relative bg-black/30 backdrop-blur-md border border-white/20 p-5 rounded-full text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/90 group-hover:border-primary">
                    <Play className="w-8 h-8 ml-1 drop-shadow-lg" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Title Overlay with Gradient Fade */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-white font-serif text-lg md:text-xl tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="font-medium tracking-wide">
            <Link href="/videos">View Full Video Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="relative w-full max-h-[90vh] aspect-[9/16] max-w-md mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing lightbox
          >
            <video
              src={displayedVideos[currentVideo].src}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
