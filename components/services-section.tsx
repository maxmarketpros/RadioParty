import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Reception Party Band",
    subtitle: "6-9 Piece Dance Band",
    description:
      "High-energy, polished performances that keep guests on the dance floor all night. From Motown to Top 40, funk to pop, we deliver an unforgettable party atmosphere.",
    image: "/images/IMG_9247.webp",
  },
  {
    title: "Jazz Quartet",
    subtitle: "Ceremony & Cocktail Hour",
    description:
      "Elegant jazz performances perfect for ceremonies and cocktail receptions. Our world-class musicians create sophisticated ambiance with timeless standards.",
    image: "/band-images/IMG_9411.webp",
  },
  {
    title: "DJ + Sax Duo",
    subtitle: "Modern Luxury Entertainment",
    description:
      "A dynamic blend of live saxophone with DJ precision. Our lead saxophonist, regarded as the best in Santa Barbara, delivers electrifying solos and smooth cocktail-hour ambiance.",
    image: "/band-images/IMG_9393.webp",
  },
  {
    title: "Solo Saxophone",
    subtitle: "Intimate Performances",
    description:
      "Perfect for intimate gatherings and special moments. Our saxophone performances add elegance and emotion to ceremonies, dinners, and cocktail hours.",
    image: "/band-images/IMG_9357.webp",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Entertainment for Every Occasion
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-card overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.15em] text-accent mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Package Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-card p-8 md:p-12">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Full-Service Wedding Packages</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We offer customizable packages to fit your vision and budget. From ceremony to
              reception, we handle every musical moment of your special day with professionalism and
              passion.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Ceremony Music
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Cocktail Hour Entertainment
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Reception Dance Band
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Custom Song Requests
              </li>
            </ul>
            <Button asChild className="mt-8 font-medium tracking-wide" size="lg">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/band-images/IMG_9362.webp"
              alt="Radio Prophets service packages overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
