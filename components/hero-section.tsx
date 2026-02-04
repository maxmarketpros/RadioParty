"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/band-images/IMG_9355.webp",
    alt: "Radio Prophets band performing live",
  },
  {
    src: "/band-images/IMG_9360.webp",
    alt: "Radio Prophets singer performing",
  },
  {
    src: "/band-images/IMG_9363.webp",
    alt: "Radio Prophets band members",
  },
  {
    src: "/band-images/IMG_9364.webp",
    alt: "Radio Prophets live performance",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/90">
          Santa Barbara&apos;s Premier Wedding Band
        </p>
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Unforgettable Music for Your Most Memorable Moments
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
          Award-winning live entertainment for weddings, corporate events, and luxury celebrations
          across California.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 font-medium tracking-wide px-8"
          >
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-medium tracking-wide px-8 bg-transparent"
          >
            <Link href="#services">Our Services</Link>
          </Button>
        </div>

        {/* Awards Badge */}
        <div className="mt-12 flex items-center gap-6 opacity-90">
          <Image
            src="/AVARDS-IMAGE.png"
            alt="WeddingWire Couples' Choice Awards 2018 and The Knot Best of Weddings 2022"
            width={500}
            height={150}
            className="h-32 w-auto"
          />
        </div>
      </div>

      {/* Slide Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
