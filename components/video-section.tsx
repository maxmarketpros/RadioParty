"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { allVideos } from "@/lib/videos";

export function VideoSection() {
  const featuredVideos = allVideos
    .filter((video) => video.orientation === "Landscape")
    .slice(0, 4);

  return (
    <section id="videos" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            See Us in Action
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Video Gallery
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Watch our live performances and see why couples choose Radio
            Prophets for their special day
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video overflow-hidden border border-border bg-black rounded-sm"
            >
              <iframe
                src={`https://drive.google.com/file/d/${video.id}/preview`}
                title={video.title}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-medium tracking-wide">
            <Link href="/videos">View Full Video Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
