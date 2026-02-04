"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { allGalleryImages } from "@/lib/images";

export default function GalleryPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % allGalleryImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-40 pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            Full Gallery
                        </p>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
                            Our Complete Portfolio
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted-foreground">
                            Explore our collection of memorable moments from weddings, corporate events, and private celebrations across California.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {allGalleryImages.map((src, index) => (
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
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                            aria-label="Close lightbox"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>


                        <div className="relative w-full max-w-7xl h-[85vh] px-4 select-none" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={allGalleryImages[currentImage] || "/placeholder.svg"}
                                alt={`Gallery image ${currentImage + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
