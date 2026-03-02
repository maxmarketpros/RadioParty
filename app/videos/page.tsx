"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { allVideos } from "@/lib/videos";

export default function VideosPage() {
    const landscapeVideos = allVideos.filter((v) => v.orientation === "Landscape");
    const portraitVideos = allVideos.filter((v) => v.orientation === "Portrait");

    const [playingPortrait, setPlayingPortrait] = useState<string | null>(null);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-40 pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            Full Video Gallery
                        </p>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
                            Our Performance Archive
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted-foreground">
                            Experience the energy and elegance of Radio Prophets. Browse our complete collection of live performances from weddings and events.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-20">
                        {/* Portrait Videos Section */}
                        <div>
                            <h2 className="font-serif text-2xl mb-8 border-b border-border/50 pb-4">Shorts & Vertical Moments</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {portraitVideos.map((video) => (
                                    <div key={video.id} className="group w-full max-w-[340px] mx-auto md:max-w-none">
                                        <button
                                            onClick={() => setPlayingPortrait(video.id)}
                                            className="block w-full text-left relative aspect-[9/16] overflow-hidden border border-border bg-black rounded-sm mb-4 cursor-pointer"
                                        >
                                            <img
                                                src={`https://drive.google.com/thumbnail?id=${video.id}&sz=w600-h1000`}
                                                alt={video.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/0">
                                                <div className="w-12 h-12 bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-colors hover:scale-110">
                                                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                </div>
                                            </div>
                                        </button>
                                        <h3 className="font-medium text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {video.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Landscape Videos Section */}
                        <div>
                            <h2 className="font-serif text-2xl mb-8 border-b border-border/50 pb-4">Featured Performances</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {landscapeVideos.map((video) => (
                                    <div key={video.id} className="group">
                                        <div className="relative aspect-video overflow-hidden border border-border bg-black rounded-sm mb-4">
                                            <iframe
                                                src={`https://drive.google.com/file/d/${video.id}/preview`}
                                                title={video.title}
                                                className="w-full h-full"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="font-medium text-lg leading-tight group-hover:text-primary transition-colors">
                                            {video.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Lightbox for Portrait Videos */}
            {playingPortrait && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setPlayingPortrait(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110]"
                        onClick={() => setPlayingPortrait(null)}
                        aria-label="Close video"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="w-full max-w-[400px] bg-black rounded-lg overflow-hidden shadow-2xl relative"
                        style={{ paddingBottom: 'calc(177.77% + 60px)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://drive.google.com/file/d/${playingPortrait}/preview`}
                            title="Video Player"
                            className="absolute inset-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}
