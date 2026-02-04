"use client";

import { Music } from "lucide-react";

export function SpotifySection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Music className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">
              Listen Now
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Our Music
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get a taste of what we bring to your event. Browse our curated
            playlist featuring the songs we love to perform.
          </p>
        </div>

        <div className="bg-background p-4 md:p-6">
          <iframe
            title="Radio Prophets Spotify Playlist"
            src="https://open.spotify.com/embed/playlist/3d3y8eQ9mDXqR6siKiBOn5?utm_source=generator&theme=0"
            width="100%"
            height="450"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
