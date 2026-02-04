import { Music, Piano, Mic2, Disc3, Users } from "lucide-react";

const packages = [
  {
    title: "Reception Band",
    icon: Users,
    options: ["5-6 Piece", "7-8 Piece", "9-10 Piece"],
    features: ["Live Sound Engineer Included"],
    genres: ["Top 40", "Pop", "Blues", "Rock", "Funk", "Soul"],
    events: "Weddings, Corporate & Luxury Events",
  },
  {
    title: "Cocktail Hour",
    subtitle: "Jazz Quartet",
    icon: Music,
    description: "Sax, Upright Bass, Drums, Keys or Guitar",
    genres: [
      "Jazz",
      "Bossa Nova",
      "Swing",
      "Bebop",
      "Smooth Jazz",
      "AfroCuban",
      "Jazz Funk",
    ],
    events: "Corporate & Luxury Events",
  },
  {
    title: "Ceremony",
    subtitle: "Solo Instrumentalist",
    icon: Piano,
    description: "Choose between Piano, Violin, Sax, Vocals, Harp",
    events: "Corporate & Luxury Events",
  },
  {
    title: "DJ + Sax Duo",
    subtitle: "DJ/Sax Collaboration",
    icon: Disc3,
    description: "Reception, Cocktail Hour or Full Event Coverage",
    events: "Corporate & Luxury Events",
    extras: ["Sax Solo", "DJ & Sax Packages", "DJ + Sax + Drums Packages"],
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
            Our Offerings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Entertainment Packages
          </h2>
          <div className="w-20 h-px bg-accent mx-auto" />
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-card p-8 border border-border hover:border-accent/50 transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <pkg.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-foreground mb-1">
                {pkg.title}
              </h3>
              {pkg.subtitle && (
                <p className="text-accent text-sm font-medium mb-4">
                  {pkg.subtitle}
                </p>
              )}

              {/* Options (for Reception Band) */}
              {pkg.options && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.options.map((option) => (
                    <span
                      key={option}
                      className="text-xs px-3 py-1 bg-secondary text-foreground/80 border border-border"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              )}

              {/* Features */}
              {pkg.features && (
                <ul className="mb-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-foreground/70 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Description */}
              {pkg.description && (
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {pkg.description}
                </p>
              )}

              {/* Genres */}
              {pkg.genres && (
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Genres
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {pkg.genres.join(" / ")}
                  </p>
                </div>
              )}

              {/* Extras (for DJ + Sax) */}
              {pkg.extras && (
                <div className="mb-4 pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Also Available
                  </p>
                  <ul className="space-y-1">
                    {pkg.extras.map((extra) => (
                      <li
                        key={extra}
                        className="text-sm text-foreground/70 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Events */}
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">{pkg.events}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Custom packages available upon request.{" "}
            <a
              href="mailto:radioprophetsevents@gmail.com"
              className="text-accent hover:underline"
            >
              Contact us
            </a>{" "}
            to discuss your event.
          </p>
        </div>
      </div>
    </section>
  );
}
