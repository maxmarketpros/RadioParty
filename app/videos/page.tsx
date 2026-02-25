"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { allVideos } from "@/lib/videos";

export default function VideosPage() {
    const landscapeVideos = allVideos.filter((v) => v.orientation === "Landscape");
    const portraitVideos = allVideos.filter((v) => v.orientation === "Portrait");

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

                    <div className="flex flex-col">
                        {/* Landscape Videos Section */}
                        <div className="order-2 md:order-1 mb-20 md:mb-0">
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

                        {/* Portrait Videos Section */}
                        <div className="order-1 md:order-2 mb-20">
                            <h2 className="font-serif text-2xl mb-8 border-b border-border/50 pb-4">Shorts & Vertical Moments</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {portraitVideos.map((video) => (
                                    <div key={video.id} className="group">
                                        <div className="relative aspect-[9/16] overflow-hidden border border-border bg-black rounded-sm mb-4">
                                            <iframe
                                                src={`https://drive.google.com/file/d/${video.id}/preview`}
                                                title={video.title}
                                                className="absolute inset-0 w-full h-full"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="font-medium text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
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
        </>
    );
}
