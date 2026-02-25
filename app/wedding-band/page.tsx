import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Users, Music, Piano, Disc3 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Award Winning Wedding Band | Radio Prophets Events",
    description:
        "Explore our luxurious entertainment packages for your wedding or corporate event. From a 10-piece Reception Band to elegant Cocktail Hour Jazz Quartets and Solo Instrumentalists.",
};

const packages = [
    {
        title: "Reception Band",
        icon: Users,
        whatsIncluded: ["Live Band Performance", "MC Duties & Announcements", "Curated Setlists", "Custom Song Requests"],
        sizeOptions: ["5-6 Piece", "7-8 Piece", "9-10 Piece"],
        duration: "Up to 4 hours of live performance",
        addOns: ["Additional Hours", "Horn Section Upgrade", "Cocktail Hour Integration"],
        equipment: "Live Sound Engineer Included, State-of-the-Art PA System & Stage Lighting",
        genres: ["Top 40", "Pop", "Blues", "Rock", "Funk", "Soul", "Classics"],
        events: "Weddings, Corporate & Luxury Events",
        longDescription: "Our flagship reception band brings unmatched energy and world-class musicianship to your dance floor. We scale from a tight 5-piece group to an explosive 10-piece ensemble complete with a full horn section, ensuring your guests never want to sit down. Perfect for the main event."
    },
    {
        title: "Cocktail Hour",
        subtitle: "Jazz Quartet",
        icon: Music,
        whatsIncluded: ["Curated Background Music", "Adaptable Volume Levels", "Elegant Atmosphere"],
        sizeOptions: ["Jazz Quartet (Sax, Upright Bass, Drums, Keys or Guitar)"],
        duration: "1 to 2 Hours (1st Hour standard, 2nd Hour optional)",
        addOns: ["Additional Hours", "Vocalist Addition"],
        equipment: "Compact PA System Included",
        genres: [
            "Jazz",
            "Bossa Nova",
            "Swing",
            "Bebop",
            "Smooth Jazz",
            "AfroCuban",
            "Jazz Funk",
            "Fusion Jazz",
        ],
        events: "Corporate & Luxury Events",
        longDescription: "Set the perfect mood as your guests mingle and enjoy drinks. Our jazz quartet provides an elegant atmosphere with a mix of timeless standards and modern hits arranged in a smooth, sophisticated style. The ideal backdrop for conversation and celebration."
    },
    {
        title: "Ceremony",
        subtitle: "Solo Instrumentalist",
        icon: Piano,
        whatsIncluded: ["Prelude Music (As guests arrive)", "Processional Song", "Recessional Song", "Custom Song Arrangements"],
        sizeOptions: ["Solo Instrumentalist (Choose between Piano, Violin, Sax, Vocals, or Harp)"],
        duration: "Up to 1 Hour (Including Prelude)",
        addOns: ["Cocktail Hour Integration", "Additional Instruments (Duo/Trio)"],
        equipment: "Portable Sound Setup & Wireless Microphone for Officiant",
        events: "Corporate & Luxury Events",
        longDescription: "Walk down the aisle to a breathtaking live performance. Whether you dream of a classical harpist, an elegant violinist, or a modern saxophone rendition of your favorite song, our soloists create unforgettable, tear-jerking moments tailored exactly to your vision."
    },
    {
        title: "DJ + Sax Duo",
        subtitle: "DJ/Sax Collaboration",
        icon: Disc3,
        whatsIncluded: ["Seamless DJ Mixing", "Live Saxophone Improvisation", "High-Energy Interactive Performance"],
        sizeOptions: ["DJ & Live Saxophonist Duo", "Solo Saxophone Option"],
        duration: "Varying (Reception, Cocktail Hour, or Full Event Coverage)",
        addOns: ["Just Sax per hour", "DJ & Sax Full Package", "Add live percussion/drums"],
        equipment: "Premium DJ Booth, PA System & Dance Floor Lighting",
        events: "Corporate & Luxury Events",
        longDescription: "Experience the best of both worlds. Our DJ seamlessly mixes your favorite tracks while our professional saxophonist roams the dance floor, playing live along with the beat to create high-energy, interactive moments your guests will love. A modern twist to traditional entertainment."
    },
];

export default function WeddingBandPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
                    <div className="absolute inset-0">
                        {/* Changed hero image to IMG_9364 as requested */}
                        <Image
                            src="/band-images/IMG_9364.webp"
                            alt="Radio Prophets Wedding Band performing live"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Subtle dark overlay for text readability */}
                        <div className="absolute inset-0 bg-foreground/60" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90">
                            Award Winning Entertainment
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance max-w-4xl mx-auto">
                            Curated Packages for Your Perfect Day
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
                            From intimate ceremonies to unforgettable high-energy receptions.
                        </p>
                    </div>
                </section>

                {/* Packages Grid Section (Moved Above Intro) */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                                Our Offerings
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                                Explore Our Packages
                            </h2>
                            <div className="w-20 h-px bg-accent mx-auto" />
                        </div>

                        {/* 2x2 Grid without photos, focused on elegant typography and big flat icons */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.title}
                                    className="bg-card p-6 lg:p-10 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full rounded-sm"
                                >
                                    {/* Big Flat Icon Header */}
                                    <div className="mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-5">
                                        <div className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center bg-accent/10 text-accent transition-colors duration-300">
                                            <pkg.icon className="w-8 h-8" />
                                        </div>
                                        <div className="mt-1 text-center sm:text-left">
                                            <h3 className="font-serif text-2xl text-foreground mb-1">
                                                {pkg.title}
                                            </h3>
                                            {pkg.subtitle && (
                                                <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase">
                                                    {pkg.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-grow flex flex-col space-y-6">
                                        {/* Long Description */}
                                        <p className="text-base text-foreground/80 leading-relaxed font-light text-center sm:text-left">
                                            {pkg.longDescription}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border/50 mt-auto">
                                            {/* What's Included */}
                                            {pkg.whatsIncluded && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        What&apos;s Included
                                                    </p>
                                                    <ul className="space-y-3">
                                                        {pkg.whatsIncluded.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="text-sm text-foreground/80 flex items-start justify-center sm:justify-start gap-3"
                                                            >
                                                                <span className="w-1.5 h-1.5 mt-2 bg-accent rounded-full shrink-0" />
                                                                <span className="leading-snug text-left">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Band Size Options */}
                                            {pkg.sizeOptions && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        Band Size Options
                                                    </p>
                                                    <ul className="space-y-3">
                                                        {pkg.sizeOptions.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="text-sm text-foreground/80 flex items-start justify-center sm:justify-start gap-3"
                                                            >
                                                                <span className="w-1.5 h-1.5 mt-2 bg-accent/70 rounded-full shrink-0" />
                                                                <span className="leading-snug text-left">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Performance Duration */}
                                            {pkg.duration && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        Performance Duration
                                                    </p>
                                                    <p className="text-sm text-foreground/80 leading-relaxed text-center sm:text-left">
                                                        {pkg.duration}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Equipment Coverage */}
                                            {pkg.equipment && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        Equipment Coverage
                                                    </p>
                                                    <p className="text-sm text-foreground/80 leading-relaxed text-center sm:text-left">
                                                        {pkg.equipment}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Add-ons */}
                                            {pkg.addOns && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        Add-ons
                                                    </p>
                                                    <ul className="space-y-3">
                                                        {pkg.addOns.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="text-sm text-foreground/80 flex items-start justify-center sm:justify-start gap-3"
                                                            >
                                                                <span className="w-1.5 h-1.5 mt-2 bg-accent/50 rounded-full shrink-0" />
                                                                <span className="leading-snug text-left">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Genres */}
                                            {pkg.genres && (
                                                <div className="space-y-4">
                                                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium text-center sm:text-left">
                                                        Genres
                                                    </p>
                                                    <p className="text-sm text-foreground/80 leading-relaxed italic text-center sm:text-left">
                                                        {pkg.genres.join(" • ")}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Footer (Events & CTA) */}
                                        <div className="pt-6 mt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <span className="inline-block px-4 py-1.5 bg-accent/5 text-accent border border-accent/20 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-center sm:text-left">
                                                {pkg.events}
                                            </span>
                                            <Link
                                                href="#contact"
                                                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors w-full sm:w-auto"
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Intro Section (Moved Below Packages and redesigned with image) */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-8 text-center lg:text-left">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        The Experience
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        Tailored Musical Experiences
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        At Radio Prophets Events, we understand that every celebration is unique. Our packages are designed to provide the perfect soundtrack for each moment of your event.
                                    </p>
                                    <p>
                                        Whether you desire a romantic solo harpist for your ceremony, a sophisticated jazz quartet for cocktail hour, or a dynamic 10-piece band to keep the dance floor packed all night long, we curate the definitive atmosphere tailored to your vision. Let us transform your special occasion into an unforgettable memory through the power of exceptional live music.
                                    </p>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-xl">
                                <Image
                                    src="/images/IMG_9355.webp"
                                    alt="Live musical performance at a tailored event"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section added right above Footer */}
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
