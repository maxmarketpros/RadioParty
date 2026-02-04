"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const vimeoVideos = [
  {
    id: "415040396",
    title: "Radio Prophets Live Performance",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/1fc82d82-21bb-4c54-b51b-6a5c96571d8e/82BAFD3F-DDA8-4E4E-A4F2-9F7CD5F9777E.jpeg",
  },
  {
    id: "606339761",
    title: "Jazz Quartet - Cocktail Hour",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/736bcee3-b60f-4f36-a9fb-d701e34f70ee/IMG_6092.jpg",
  },
  {
    id: "606347996",
    title: "DJ + Sax Duo at Wedding Reception",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/0a9daa16-9d03-4b72-ab69-13caf6bf1e3b/IMG_0881.jpg",
  },
  {
    id: "693845778",
    title: "Full Band - Wedding Highlights",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/3d1ffdc3-e688-44a1-88fb-9c9576387345/25DD4B62-EA02-49E1-B4B7-E31E070185DD.jpeg",
  },
  {
    id: "695310157",
    title: "Reception Party Band",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/26d77254-44a3-4087-953c-d8b2a2d2ceee/E2FA16F3-0BA3-4B92-9BC2-12E07F6E0C97.jpeg",
  },
  {
    id: "695325038",
    title: "Live Entertainment Showcase",
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/de15aafb-1275-4997-bbad-f11207aff2d2/7F2CD8C6-C58D-4A2E-90BB-4F1248FB1742.jpeg",
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vimeoVideos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video.id)}
              className="relative aspect-video overflow-hidden group border border-border"
            >
              {/* biome-ignore lint/nursery/noImgElement: thumbnail needs dynamic loading */}
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-white font-medium text-lg text-left">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
            onKeyDown={(e) => e.key === "Escape" && setActiveVideo(null)}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                title="Vimeo video player"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
